const APPLICATIONS_KEY = 'fergana_topik_applications';
const CHAT_KEY = 'fergana_topik_chat_messages';
const ADMIN_CODE = 'abdeyms';
const NOTIFICATION_KEY = 'fergana_topik_notifications';

function readStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
}

function getTopikStatus(application) {
  const resultText = String(application.topik_natija || '').toLowerCase();
  const result = Number(resultText.match(/\d+(?:\.\d+)?/)?.[0] || 0);
  if (result >= 3) return { key: 'high', label: 'Yuqori TOPIK', order: 3 };
  if (result > 0 || application.topik_ishlagan) return { key: 'medium', label: 'O‘rtacha TOPIK', order: 2 };
  return { key: 'low', label: 'Talabga javob bermaydi', order: 1 };
}

function renderAdmin() {
  const applications = readStorage(APPLICATIONS_KEY);
  const messages = readStorage(CHAT_KEY);
  const unread = messages.filter(message => !message.read).length;
  document.getElementById('applicationCount').textContent = applications.length;
  document.getElementById('messageCount').textContent = messages.length;
  document.getElementById('unreadCount').textContent = unread;

  const messageList = document.getElementById('messageList');
  messageList.innerHTML = messages.length ? messages.slice().reverse().map(message => `<article class="admin-item admin-message ${message.read ? '' : 'unread'}"><strong>${escapeHtml(message.message)}</strong><time>${new Date(message.createdAt).toLocaleString()}</time><div class="admin-replies">${(message.replies || []).map(reply => `<p><b>Admin:</b> ${escapeHtml(reply.text)}</p>`).join('')}</div><form class="admin-reply-form" data-message-id="${message.id}"><input name="reply" type="text" placeholder="Javob yozing..." required><button class="btn-primary" type="submit">Javob berish</button></form></article>`).join('') : '<p class="admin-empty">Hozircha chat xabarlari yo‘q.</p>';
  const applicationList = document.getElementById('applicationList');
  const sortedApplications = applications.slice().sort((first, second) => getTopikStatus(second).order - getTopikStatus(first).order || Number(second.topik_natija?.match(/\d+/)?.[0] || 0) - Number(first.topik_natija?.match(/\d+/)?.[0] || 0) || new Date(second.createdAt) - new Date(first.createdAt));
  applicationList.innerHTML = sortedApplications.length ? sortedApplications.map(application => {
    const status = getTopikStatus(application);
    const accepted = application.status === 'accepted';
    const rejected = application.status === 'rejected';
    const statusText = accepted ? 'Qabul qilindi' : rejected ? 'Rad etildi' : 'Kutilmoqda';
    return `<article class="admin-item application-item status-${status.key} ${accepted ? 'is-accepted' : ''} ${rejected ? 'is-rejected' : ''}"><span class="status-dot" title="${status.label}"></span><strong>${escapeHtml(`${application.ism || ''} ${application.familiya || ''}`.trim() || 'Nomsiz ariza')}</strong><span>${escapeHtml(application.topik_natija || application.topik_ishlagan || 'TOPIK ma’lumoti yo‘q')}</span><span>${escapeHtml(`Kirish: ${application.topik_kirish_soni || 0} marta`)}</span><time>${new Date(application.createdAt).toLocaleString()}</time><span class="accept-status ${accepted ? 'accepted' : rejected ? 'rejected' : 'pending'}">${statusText}</span><div class="application-actions"><button class="btn-secondary application-view" type="button" data-application-id="${escapeHtml(application.id)}">Batafsil ko‘rish</button>${accepted || rejected ? '' : `<button class="btn-primary application-accept" type="button" data-application-id="${escapeHtml(application.id)}">Qabul qilish</button><button class="btn-secondary application-reject" type="button" data-application-id="${escapeHtml(application.id)}">Rad etish</button>`}</div></article>`;
  }).join('') : '<p class="admin-empty">Hozircha arizalar yo‘q.</p>';
  localStorage.setItem(CHAT_KEY, JSON.stringify(messages.map(message => ({ ...message, read: true }))));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

document.getElementById('adminLoginForm').addEventListener('submit', event => {
  event.preventDefault();
  const code = document.getElementById('adminCode').value;
  if (code === ADMIN_CODE) {
    document.getElementById('adminLogin').hidden = true;
    document.getElementById('adminContent').hidden = false;
    renderAdmin();
  } else {
    document.getElementById('adminLoginError').textContent = 'Admin kodi noto‘g‘ri';
  }
});
document.getElementById('clearMessages').addEventListener('click', () => { localStorage.removeItem(CHAT_KEY); renderAdmin(); });
document.getElementById('applicationList').addEventListener('click', event => {
  const acceptButton = event.target.closest('.application-accept');
  if (acceptButton) {
    const applications = readStorage(APPLICATIONS_KEY);
    const application = applications.find(item => item.id === acceptButton.dataset.applicationId);
    if (!application) return;
    application.status = 'accepted';
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
    if (application.userId) {
      const notifications = readStorage(NOTIFICATION_KEY);
      notifications.push({ id: Date.now().toString(), userId: application.userId, text: 'Tabriklaymiz! Arizangiz qabul qilindi.', status: 'accepted', createdAt: new Date().toISOString(), read: false });
      localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
    }
    renderAdmin();
    return;
  }

  const rejectButton = event.target.closest('.application-reject');
  if (rejectButton) {
    const applications = readStorage(APPLICATIONS_KEY);
    const application = applications.find(item => item.id === rejectButton.dataset.applicationId);
    if (!application) return;
    application.status = 'rejected';
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
    if (application.userId) {
      const notifications = readStorage(NOTIFICATION_KEY);
      notifications.push({ id: Date.now().toString(), userId: application.userId, text: 'Uzr, arizangiz rad etildi.', status: 'rejected', createdAt: new Date().toISOString(), read: false });
      localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
    }
    renderAdmin();
    return;
  }

  const button = event.target.closest('.application-view');
  if (!button) return;
  const application = readStorage(APPLICATIONS_KEY).find(item => item.id === button.dataset.applicationId);
  if (!application) return;
  const labels = { ism: 'Ism', familiya: 'Familiya', pasport: 'Pasport', tugilgan: 'Tug‘ilgan sana', manzil: 'Manzil', jins: 'Jins', telefon: 'Telefon', telegram: 'Telegram ID', email: 'Email', ishjoyi: 'Ish joyi', lavozim: 'Lavozim', topik_ishlagan: 'TOPIK tajribasi', topik_natija: 'TOPIK natijasi yoki darajasi', topik_kirish_soni: 'TOPIK imtihoniga kirish soni', bosh_nazoratchi: 'Bosh nazoratchi tajribasi', yordamchi_nazoratchi: 'Yordamchi nazoratchi tajribasi', ozbek_tili: 'O‘zbek tili', koreys_tili: 'Koreys tili', rus_tili: 'Rus tili', ingliz_tili: 'Ingliz tili', ona_tili: 'Ona tili', xalqaro_sertifikat: 'Xalqaro sertifikat', photoName: 'Shaxsiy rasm', certificateFile: 'Sertifikat fayli', passportFile: 'Pasport fayli', createdAt: 'Ariza sanasi' };
  const detailValue = (key, value) => {
    if (!value) return '<strong>Kiritilmagan</strong>';
    if (key === 'photoName' && application.photoData) return `<img class="detail-photo" src="${escapeHtml(application.photoData)}" alt="Shaxsiy rasm"><strong>${escapeHtml(value)}</strong>`;
    if (key === 'certificateFile' && application.certificateData) return `<a class="detail-file" href="${escapeHtml(application.certificateData)}" download="${escapeHtml(value)}">${escapeHtml(value)} - ko‘rish/yuklash</a>`;
    if (key === 'passportFile' && application.passportData) return `<a class="detail-file" href="${escapeHtml(application.passportData)}" download="${escapeHtml(value)}">${escapeHtml(value)} - ko‘rish/yuklash</a>`;
    return `<strong>${escapeHtml(value)}</strong>`;
  };
  document.getElementById('applicationDetails').innerHTML = Object.entries(labels).map(([key, label]) => `<div class="detail-row"><span>${escapeHtml(label)}</span>${detailValue(key, application[key])}</div>`).join('');
  document.getElementById('applicationModal').hidden = false;
});
document.getElementById('modalClose').addEventListener('click', () => { document.getElementById('applicationModal').hidden = true; });
document.getElementById('applicationModal').addEventListener('click', event => { if (event.target.id === 'applicationModal') event.currentTarget.hidden = true; });
document.getElementById('messageList').addEventListener('submit', event => {
  if (!event.target.matches('.admin-reply-form')) return;
  event.preventDefault();
  const reply = event.target.reply.value.trim();
  if (!reply) return;
  const messageId = event.target.dataset.messageId;
  const messages = readStorage(CHAT_KEY);
  const message = messages.find(item => item.id === messageId);
  if (!message) return;
  message.replies = message.replies || [];
  message.replies.push({ id: Date.now().toString(), text: reply, createdAt: new Date().toISOString() });
  localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
  renderAdmin();
});
