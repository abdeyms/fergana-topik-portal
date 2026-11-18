const translations = {
  uz: {
    officialForm: "Rasmiy Anketa", mainTitle: "Arizachining Ro'yxatdan O'tish Anketasi", mainDesc: "Iltimos, barcha maydonlarni to'g'ri va xatosiz to'ldiring. Ma'lumotlar kartochkada aks etadi.",
    sec1: "1. Shaxsiy ma'lumotlar", q1: "1. Ism", q2: "2. Familiya", q3: "3. Pasport seriya va raqami", q4: "4. Doimiy yashash manzili", q5: "5. Shaxsiy rasm (3x4)", q6: "6. Tug'ilgan sana", q7: "7. Jinsingiz",
    sec2: "2. Aloqa va bog'lanish", q8: "8. Telefon raqam", q9: "9. Telegram ID", q10: "10. Elektron pochta (Email)", sec3: "3. Ish joyi va faoliyat", q11: "11. Ish joyi", q12: "12. Egallab turgan lavozimi",
    sec4: "4. TOPIK tajribasi va Til darajalari", q13: "13. Qaysi TOPIK imtihonlariga kirgansiz?", q14: "14. Bosh nazoratchi bo'lib:", q15: "15. Yordamchi nazoratchi bo'lib:", q16: "16. O'zbek tili bilish darajasi", q17: "17. Koreys tili bilish darajasi", q18: "18. Rus tili bilish darajasi", q19: "19. Ingliz tili bilish darajasi", q20: "20. Ona tilingizni tanlang",
    sec5: "5. Hujjatlar va Sertifikatlar", q21: "21. Xalqaro sertifikat kiritish", q22: "22. Til sertifikati faylini yuklang (.pdf, .jpg)", q23: "23. Passport nusxasini yuklang (.pdf, .jpg)", selectOpt: "Tanlang", male: "Erkak", female: "Ayol", lvlHigh: "Yuqori", lvlMid: "O'rta", lvlLow: "Past", lvlNone: "Yo'q", optLabel: "(Ixtiyoriy)", uploadBtn: "Rasm biriktirish", fileFormats: "Formatlar: JPG, PNG", submitBtn: "Anketani topshirish", clearBtn: "Formani tozalash", cardBadge: "ARIZA KARTASI", defaultName: "Ism Familiya", defaultRole: "Hujjat topshiruvchi", genderTag: "Jins", ageTag: "Yosh", lblPassport: "Pasport:", lblAddress: "Manzil:", lblPhone: "Telefon:", lblEmail: "Email:", lblWork: "Ish joyi:", lblPos: "Lavozim:", lblNativeLang: "Ona tili:", lblKorLang: "Koreys tili:", lblCert: "Sertifikat:", sysCode: "Tizim kodi:", printBtn: "Kartani chop etish", downloadBtn: "JSON yuklab olish", reqErr: "Ushbu maydon to'ldirilishi shart", fileErr: "Hujjat faylini yuklang", photoErr: "Shaxsiy rasmni yuklang", successMsg: "Anketa bazaga saqlandi!", errorMsg: "Xatolik: majburiy maydonlarni to'ldiring", clearedMsg: "Forma tozalandi", restoredMsg: "Oxirgi saqlangan ma'lumotlar tiklandi", dbErr: "Baza xatosi: ma'lumot saqlanmadi"
  },
  ru: {
    officialForm: "Официальная анкета", mainTitle: "Анкета регистрации заявителя", mainDesc: "Пожалуйста, заполните все поля правильно. Данные отобразятся на карточке.", sec1: "1. Личные данные", q1: "1. Имя", q2: "2. Фамилия", q3: "3. Серия и номер паспорта", q4: "4. Адрес постоянного проживания", q5: "5. Фотография (3x4)", q6: "6. Дата рождения", q7: "7. Ваш пол", sec2: "2. Контактная информация", q8: "8. Номер телефона", q9: "9. Telegram ID", q10: "10. Электронная почта (Email)", sec3: "3. Место работы и деятельность", q11: "11. Место работы", q12: "12. Занимаемая должность", sec4: "4. Опыт TOPIK и уровень владения языками", q13: "13. На каких экзаменах TOPIK и в какой должности вы работали?", q14: "14. В качестве главного проктора:", q15: "15. В качестве ассистента проктора:", q16: "16. Уровень узбекского языка", q17: "17. Уровень корейского языка", q18: "18. Уровень русского языка", q19: "19. Уровень английского языка", q20: "20. Выберите ваш родной язык", sec5: "5. Документы и сертификаты", q21: "21. Введите международный сертификат", q22: "22. Загрузите языковой сертификат (.pdf, .jpg)", q23: "23. Загрузите копию паспорта (.pdf, .jpg)", selectOpt: "Выберите", male: "Мужской", female: "Женский", lvlHigh: "Высокий", lvlMid: "Средний", lvlLow: "Низкий", lvlNone: "Нет", optLabel: "(Опционально)", uploadBtn: "Прикрепить фото", fileFormats: "Форматы: JPG, PNG", submitBtn: "Отправить анкету", clearBtn: "Очистить форму", cardBadge: "КАРТОЧКА ЗАЯВКИ", defaultName: "Имя Фамилия", defaultRole: "Заявитель", genderTag: "Пол", ageTag: "Возраст", lblPassport: "Паспорт:", lblAddress: "Адрес:", lblPhone: "Телефон:", lblEmail: "Email:", lblWork: "Место работы:", lblPos: "Должность:", lblNativeLang: "Родной язык:", lblKorLang: "Корейский:", lblCert: "Сертификат:", sysCode: "Код системы:", printBtn: "Распечатать карту", downloadBtn: "Скачать JSON", reqErr: "Это поле обязательно", fileErr: "Загрузите файл документа", photoErr: "Загрузите фотографию", successMsg: "Анкета сохранена в базе!", errorMsg: "Ошибка: заполните обязательные поля", clearedMsg: "Форма очищена", restoredMsg: "Последние сохраненные данные восстановлены", dbErr: "Ошибка базы: данные не сохранены"
  },
  en: {
    officialForm: "Official Form", mainTitle: "Applicant Registration Form", mainDesc: "Please fill in all fields correctly. Data will appear on the card.", sec1: "1. Personal Information", q1: "1. First Name", q2: "2. Last Name", q3: "3. Passport Series & Number", q4: "4. Permanent Address", q5: "5. Personal Photo (3x4)", q6: "6. Date of Birth", q7: "7. Gender", sec2: "2. Contact Details", q8: "8. Phone Number", q9: "9. Telegram ID", q10: "10. Email Address", sec3: "3. Work Place & Position", q11: "11. Workplace", q12: "12. Current Position", sec4: "4. TOPIK Experience & Language Proficiency", q13: "13. Which TOPIK exams and roles have you worked in?", q14: "14. As Chief Proctor:", q15: "15. As Assistant Proctor:", q16: "16. Uzbek Proficiency Level", q17: "17. Korean Proficiency Level", q18: "18. Russian Proficiency Level", q19: "19. English Proficiency Level", q20: "20. Select Native Language", sec5: "5. Documents & Certificates", q21: "21. Enter International Certificate", q22: "22. Upload Language Certificate (.pdf, .jpg)", q23: "23. Upload Passport Copy (.pdf, .jpg)", selectOpt: "Select", male: "Male", female: "Female", lvlHigh: "High", lvlMid: "Intermediate", lvlLow: "Basic", lvlNone: "None", optLabel: "(Optional)", uploadBtn: "Upload Photo", fileFormats: "Formats: JPG, PNG", submitBtn: "Submit Form", clearBtn: "Clear Form", cardBadge: "APPLICATION CARD", defaultName: "Full Name", defaultRole: "Applicant", genderTag: "Gender", ageTag: "Age", lblPassport: "Passport:", lblAddress: "Address:", lblPhone: "Phone:", lblEmail: "Email:", lblWork: "Workplace:", lblPos: "Position:", lblNativeLang: "Native Lang:", lblKorLang: "Korean:", lblCert: "Certificate:", sysCode: "System Code:", printBtn: "Print Card", downloadBtn: "Download JSON", reqErr: "This field is required", fileErr: "Upload document file", photoErr: "Upload personal photo", successMsg: "Form saved to the database!", errorMsg: "Error: fill in all required fields", clearedMsg: "Form cleared", restoredMsg: "Last saved data restored", dbErr: "Database error: data was not saved"
  },
  ko: {
    officialForm: "공식 지원서", mainTitle: "지원자 등록 신청서", mainDesc: "모든 항목을 정확히 입력해 주세요. 정보가 카드에 표시됩니다.", sec1: "1. 인적 사항", q1: "1. 이름", q2: "2. 성", q3: "3. 여권 번호", q4: "4. 거주지 주소", q5: "5. 증명 사진 (3x4)", q6: "6. 생년월일", q7: "7. 성별", sec2: "2. 연락처 정보", q8: "8. 전화번호", q9: "9. 텔레그램 ID", q10: "10. 이메일 주소", sec3: "3. 직장 정보", q11: "11. 직장명", q12: "12. 직책", sec4: "4. TOPIK 감독 경력 및 어학 능력", q13: "13. 참가한 TOPIK 시험 및 담당 역할", q14: "14. 수석 감독관 경력:", q15: "15. 부감독관 경력:", q16: "16. 우즈베크어 능력", q17: "17. 한국어 능력", q18: "18. 러시아어 능력", q19: "19. 영어 능력", q20: "20. 모국어 선택", sec5: "5. 서류 및 자격증", q21: "21. 어학 성적 입력", q22: "22. 어학 자격증 파일 업로드 (.pdf, .jpg)", q23: "23. 여권 사본 업로드 (.pdf, .jpg)", selectOpt: "선택", male: "남성", female: "여성", lvlHigh: "상", lvlMid: "중", lvlLow: "하", lvlNone: "없음", optLabel: "(선택 사항)", uploadBtn: "사진 첨부", fileFormats: "지원 형식: JPG, PNG", submitBtn: "신청서 제출", clearBtn: "양식 초기화", cardBadge: "지원자 카드", defaultName: "성명", defaultRole: "지원자", genderTag: "성별", ageTag: "연령", lblPassport: "여권번호:", lblAddress: "주소:", lblPhone: "전화번호:", lblEmail: "이메일:", lblWork: "직장:", lblPos: "직책:", lblNativeLang: "모국어:", lblKorLang: "한국어:", lblCert: "자격증:", sysCode: "시스템 코드:", printBtn: "카드 출력", downloadBtn: "JSON 다운로드", reqErr: "필수 입력 항목입니다.", fileErr: "파일을 업로드하세요.", photoErr: "사진을 업로드하세요.", successMsg: "지원서가 데이터베이스에 저장되었습니다!", errorMsg: "오류: 필수 항목을 입력하세요.", clearedMsg: "양식이 초기화되었습니다.", restoredMsg: "마지막 저장 데이터가 복원되었습니다.", dbErr: "데이터베이스 오류: 저장되지 않았습니다."
  }
};

const DB_KEY = 'fergana_topik_applications';
const LAST_KEY = 'fergana_topik_last_application';
const CHAT_KEY = 'fergana_topik_chat_messages';
const CHAT_USER_KEY = 'fergana_topik_chat_user_id';
const NOTIFICATION_KEY = 'fergana_topik_notifications';
const PORTAL_PASSPORT_KEY = 'fergana_topik_current_passport';
const LAST_FIELD_KEY = 'fergana_topik_last_field';
let currentLang = localStorage.getItem('fergana_topik_language') || 'uz';
let selectedPhotoUrl = '';
let selectedPhotoName = '';
const normalizePassport = value => String(value || '').replace(/\s+/g, '').toUpperCase();
let chatUserId = sessionStorage.getItem(CHAT_USER_KEY);
if (!chatUserId) {
  chatUserId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  sessionStorage.setItem(CHAT_USER_KEY, chatUserId);
}

window.addEventListener('DOMContentLoaded', () => {
  const portalLogin = document.getElementById('portalLogin');
  const portalLoginForm = document.getElementById('portalLoginForm');
  const portalPassport = document.getElementById('portalPassport');
  const portalLoginError = document.getElementById('portalLoginError');
  const form = document.getElementById('anketaForm');
  const langSelect = document.getElementById('langSelect');
  const photoInput = document.getElementById('rasm');
  const toast = document.getElementById('toast');
  const chatPanel = document.getElementById('chatPanel');
  const chatLauncher = document.getElementById('chatLauncher');
  const chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const notificationButton = document.getElementById('notificationButton');
  const notificationPanel = document.getElementById('notificationPanel');
  const notificationList = document.getElementById('notificationList');
  const fieldIds = ['ism', 'familiya', 'pasport', 'tugilgan', 'manzil', 'jins', 'telefon', 'telegram', 'email', 'ishjoyi', 'lavozim', 'topik_ishlagan', 'topik_natija', 'topik_kirish_soni', 'bosh_nazoratchi', 'yordamchi_nazoratchi', 'ozbek_tili', 'koreys_tili', 'rus_tili', 'ingliz_tili', 'ona_tili', 'xalqaro_sertifikat'];
  const requiredIds = ['ism', 'familiya', 'pasport', 'tugilgan', 'manzil', 'jins', 'telefon', 'email', 'ishjoyi', 'lavozim', 'ozbek_tili', 'koreys_tili', 'rus_tili', 'ingliz_tili', 'ona_tili', 'xalqaro_sertifikat'];
  const locationData = {
    Andijon: ['Andijon', 'Asaka', 'Baliqchi', "Bo'z", 'Buloqboshi', 'Izboskan', 'Jalaquduq', 'Marhamat', "Oltinko'l", 'Paxtaobod', 'Qo‘rg‘ontepa', 'Shahrixon', 'Ulug‘nor', 'Xo‘jaobod'],
    Buxoro: ['Buxoro', 'G‘ijduvon', 'Jondor', 'Kogon', 'Olot', 'Peshku', 'Qorako‘l', 'Qorovulbozor', 'Romitan', 'Shofirkon', 'Vobkent'],
    Jizzax: ['Arnasoy', 'Baxmal', 'Do‘stlik', 'Forish', 'G‘allaorol', 'Jizzax', 'Mirzacho‘l', 'Paxtakor', 'Yangiobod', 'Zafarobod', 'Zarbdor', 'Zomin'],
    Qashqadaryo: ['Chiroqchi', 'Dehqonobod', 'G‘uzor', 'Kasbi', 'Kitob', 'Koson', 'Mirishkor', 'Muborak', 'Nishon', 'Qamashi', 'Qarshi', 'Shahrisabz', 'Yakkabog‘', 'Ko‘kdala'],
    Navoiy: ['Karmana', 'Konimex', 'Navbahor', 'Nurota', 'Qiziltepa', 'Tomdi', 'Uchquduq', 'Xatirchi'],
    Namangan: ['Chortoq', 'Chust', 'Kosonsoy', 'Mingbuloq', 'Namangan', 'Norin', 'Pop', 'To‘raqo‘rg‘on', 'Uchqo‘rg‘on', 'Uychi', 'Yangiqo‘rg‘on', 'Yangi Namangan', 'Davlatobod', 'Namangan shahri'],
    Samarqand: ['Bulung‘ur', 'Ishtixon', 'Jomboy', 'Kattaqo‘rg‘on', 'Narpay', 'Nurobod', 'Oqdaryo', 'Paxtachi', 'Payariq', 'Pastdarg‘om', 'Qo‘shrabot', 'Samarqand', 'Toyloq', 'Urgut'],
    Surxondaryo: ['Angor', 'Bandixon', 'Boysun', 'Denov', 'Jarqo‘rg‘on', 'Muzrabot', 'Oltinsoy', 'Qiziriq', 'Qumqo‘rg‘on', 'Sariosiyo', 'Sherobod', 'Sho‘rchi', 'Termiz', 'Uzun'],
    Sirdaryo: ['Boyovut', 'Guliston', 'Mirzaobod', 'Oqoltin', 'Sayxunobod', 'Sardoba', 'Sirdaryo', 'Xovos'],
    Toshkent: ['Bekobod', 'Bo‘ka', 'Bo‘stonliq', 'Chinoz', 'Ohangaron', 'Oqqo‘rg‘on', 'Parkent', 'Piskent', 'Quyi Chirchiq', 'Toshkent', 'Uchko‘prik', 'Yuqori Chirchiq', 'Yangiyo‘l', 'Zangiota', 'Qibray'],
    'Farg‘ona': ['Bag‘dod', 'Beshariq', 'Buvayda', 'Dang‘ara', 'Farg‘ona', 'Furqat', 'Oltiariq', 'O‘zbekiston', 'Qo‘qon', 'Quva', 'Rishton', 'So‘x', 'Toshloq', 'Uchko‘prik', 'Yozyovon'],
    Xorazm: ['Bog‘ot', 'Gurlan', 'Hazorasp', 'Xiva', 'Qo‘shko‘pir', 'Shovot', 'Tuproqqal’a', 'Urganch', 'Xonqa', 'Yangibozor', 'Yangiariq']
  };

  function setupAddressSelectors() {
    const regionSelect = document.getElementById('manzil_viloyat');
    const districtSelect = document.getElementById('manzil_tuman');
    const addressInput = document.getElementById('manzil');
    Object.keys(locationData).forEach(region => regionSelect.add(new Option(region, region)));
    regionSelect.addEventListener('change', () => {
      districtSelect.replaceChildren(new Option('Tumanni tanlang', ''));
      (locationData[regionSelect.value] || []).forEach(district => districtSelect.add(new Option(district, district)));
      districtSelect.disabled = !regionSelect.value;
      addressInput.value = '';
    });
    districtSelect.addEventListener('change', () => {
      addressInput.value = regionSelect.value && districtSelect.value ? `${regionSelect.value}, ${districtSelect.value}` : '';
    });
  }
  setupAddressSelectors();

  async function unlockPortal(passport) {
    chatUserId = normalizePassport(passport);
    sessionStorage.setItem(CHAT_USER_KEY, chatUserId);
    localStorage.setItem(PORTAL_PASSPORT_KEY, chatUserId);
    document.getElementById('pasport').value = chatUserId;
    portalLogin.hidden = true;
    document.body.classList.remove('portal-locked');
    const savedApplication = JSON.parse(localStorage.getItem(DB_KEY) || '[]').find(item => normalizePassport(item.pasport) === chatUserId);
    if (savedApplication) restore(savedApplication);
    const lastField = localStorage.getItem(LAST_FIELD_KEY);
    if (lastField && document.getElementById(lastField)) {
      const field = document.getElementById(lastField);
      field.focus({ preventScroll: true });
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    syncNotifications();
    syncAdminReplies();
  }

  portalLoginForm.addEventListener('submit', event => {
    event.preventDefault();
    const passport = normalizePassport(portalPassport.value);
    if (!/^[A-Z]{2}\d{7}$/.test(passport)) {
      portalLoginError.textContent = 'Passport raqami AA1234567 ko‘rinishida bo‘lsin';
      return;
    }
    portalLoginError.textContent = '';
    unlockPortal(passport);
  });
  const savedPassport = normalizePassport(localStorage.getItem(PORTAL_PASSPORT_KEY));
  if (savedPassport) {
    portalPassport.value = savedPassport;
    const loginHint = document.createElement('small');
    loginHint.className = 'portal-login-hint';
    loginHint.textContent = `Oldingi kirilgan ID: ${savedPassport}`;
    portalLoginForm.insertBefore(loginHint, portalLoginError);
    portalPassport.focus();
    portalPassport.select();
  }

  function syncNotifications() {
    const notifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || '[]').filter(item => item.userId === chatUserId);
    notificationList.innerHTML = notifications.length ? notifications.slice().reverse().map(item => `<div class="notification-item ${item.status || 'info'}">${item.text}</div>`).join('') : '<div class="notification-empty">Hozircha xabar yo‘q</div>';
    document.getElementById('notificationCount').textContent = notifications.length;
  }
  notificationButton.addEventListener('click', () => {
    notificationPanel.hidden = !notificationPanel.hidden;
    if (!notificationPanel.hidden) {
      const notifications = JSON.parse(localStorage.getItem(NOTIFICATION_KEY) || '[]');
      notifications.forEach(item => { if (item.userId === chatUserId) item.read = true; });
      localStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notifications));
      document.getElementById('notificationCount').textContent = '0';
    }
    syncNotifications();
  });
  window.setInterval(syncNotifications, 1500);
  syncNotifications();

  chatLauncher.addEventListener('click', () => { chatPanel.hidden = false; chatLauncher.classList.add('is-hidden'); chatInput.focus(); });
  chatClose.addEventListener('click', () => { chatPanel.hidden = true; chatLauncher.classList.remove('is-hidden'); });
  chatForm.addEventListener('submit', async event => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    const userBubble = document.createElement('div');
    const messageId = Date.now().toString();
    userBubble.id = `message-${messageId}`;
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = message;
    chatMessages.appendChild(userBubble);
    const inbox = JSON.parse(localStorage.getItem(CHAT_KEY) || '[]');
    const passportId = normalizePassport(document.getElementById('pasport').value);
    if (passportId) { chatUserId = passportId; sessionStorage.setItem(CHAT_USER_KEY, chatUserId); }
    inbox.push({ id: messageId, userId: chatUserId, message, createdAt: new Date().toISOString(), read: false, replies: [] });
    localStorage.setItem(CHAT_KEY, JSON.stringify(inbox));
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    window.setTimeout(() => {
      const messages = JSON.parse(localStorage.getItem(CHAT_KEY) || '[]');
      const currentMessage = messages.find(item => item.id === messageId);
      if (!currentMessage || currentMessage.replies?.length) return;
      const reply = document.createElement('div');
      reply.id = `reply-auto-${messageId}`;
      reply.className = 'chat-bubble bot';
      reply.textContent = 'Xabaringiz qabul qilindi. Admin tez orada javob beradi.';
      chatMessages.appendChild(reply);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
  });

  function syncAdminReplies() {
    const messages = JSON.parse(localStorage.getItem(CHAT_KEY) || '[]');
    messages.filter(message => message.userId === chatUserId).forEach(message => {
      if (!document.getElementById(`message-${message.id}`)) {
        const userBubble = document.createElement('div');
        userBubble.id = `message-${message.id}`;
        userBubble.className = 'chat-bubble user';
        userBubble.textContent = message.message;
        chatMessages.appendChild(userBubble);
      }
      (message.replies || []).forEach(reply => {
        const replyId = `reply-${reply.id}`;
        if (document.getElementById(replyId)) return;
        const bubble = document.createElement('div');
        bubble.id = replyId;
        bubble.className = 'chat-bubble bot admin-reply';
        bubble.textContent = reply.text;
        chatMessages.appendChild(bubble);
      });
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  window.setInterval(syncAdminReplies, 1200);
  syncAdminReplies();

  const text = key => (translations[currentLang] || translations.uz)[key] || key;
  const showToast = message => { toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 3200); };

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'uz';
    localStorage.setItem('fergana_topik_language', currentLang);
    langSelect.value = currentLang;
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(element => { const value = text(element.dataset.i18n); if (value) element.textContent = value; });
    document.getElementById('fname').textContent = selectedPhotoName || text('fileFormats');
    updatePreview();
  }

  function readFields() {
    const data = {};
    fieldIds.forEach(id => { data[id] = document.getElementById(id).value.trim(); });
    data.pasport = normalizePassport(data.pasport);
    data.photoName = selectedPhotoName;
    data.photoData = selectedPhotoUrl;
    const certificate = document.getElementById('sertifikat_fayl').files[0];
    const passportFile = document.getElementById('pasport_fayl').files[0];
    data.certificateFile = certificate ? certificate.name : '';
    data.passportFile = passportFile ? passportFile.name : '';
    return data;
  }

  function setValue(id, value) { const element = document.getElementById(id); if (element) element.value = value || ''; }
  function setCardValue(id, value) { const element = document.getElementById(id); element.textContent = value || '—'; element.classList.toggle('empty', !value); }

  function updatePreview() {
    const data = readFields();
    document.getElementById('idFullname').textContent = data.ism || data.familiya ? `${data.ism} ${data.familiya}`.trim() : text('defaultName');
    document.getElementById('idSub').textContent = text('defaultRole');
    document.getElementById('tagJins').textContent = data.jins ? (data.jins === 'Erkak' ? text('male') : text('female')) : text('genderTag');
    document.getElementById('tagYosh').textContent = data.tugilgan ? String(Math.max(0, new Date().getFullYear() - new Date(data.tugilgan).getFullYear())) : text('ageTag');
    const cardFields = { Pasport: 'pasport', Manzil: 'manzil', Telefon: 'telefon', Email: 'email', Ishjoyi: 'ishjoyi', Lavozim: 'lavozim', OnaTili: 'ona_tili', KoreysTili: 'koreys_tili' };
    Object.entries(cardFields).forEach(([cardName, fieldName]) => setCardValue(`v${cardName}`, data[fieldName]));
    setCardValue('vSertifikat', data.xalqaro_sertifikat);
    if (selectedPhotoUrl) document.getElementById('idphoto').style.backgroundImage = `url('${selectedPhotoUrl}')`;
  }

  function setError(id, message) { const group = document.querySelector(`[data-field="${id}"]`); if (!group) return; group.classList.add('invalid'); group.querySelector('.err-msg').textContent = message; }
  function clearError(id) { const group = document.querySelector(`[data-field="${id}"]`); if (!group) return; group.classList.remove('invalid'); group.querySelector('.err-msg').textContent = ''; }
  function syncCertificateVisibility() {
    const hasCertificate = document.getElementById('xalqaro_sertifikat').value === 'Bor';
    document.getElementById('certificateFileGroup').hidden = !hasCertificate;
    if (!hasCertificate) document.getElementById('sertifikat_fayl').value = '';
  }

  function restore(data) {
    fieldIds.forEach(id => setValue(id, data[id]));
    if (data.manzil) {
      const [region, district] = data.manzil.split(',').map(value => value.trim());
      const regionSelect = document.getElementById('manzil_viloyat');
      const districtSelect = document.getElementById('manzil_tuman');
      if (regionSelect && districtSelect && locationData[region]) {
        regionSelect.value = region;
        districtSelect.replaceChildren(new Option('Tumanni tanlang', ''));
        (locationData[region] || []).forEach(districtName => districtSelect.add(new Option(districtName, districtName)));
        districtSelect.disabled = false;
        districtSelect.value = district || '';
      }
    }
    document.querySelectorAll('[data-checkbox-group]').forEach(group => {
      const values = String(data[group.dataset.checkboxGroup] || '').split(',').map(value => value.trim());
      group.querySelectorAll('input[type="checkbox"]').forEach(input => { input.checked = values.includes(input.value); });
    });
    syncCheckboxValues();
    syncCertificateVisibility();
    const passportId = normalizePassport(data.pasport);
    if (passportId) { chatUserId = passportId; sessionStorage.setItem(CHAT_USER_KEY, chatUserId); }
    selectedPhotoUrl = data.photoData || '';
    selectedPhotoName = data.photoName || '';
    if (selectedPhotoUrl) { document.getElementById('thumbPreview').style.backgroundImage = `url('${selectedPhotoUrl}')`; document.getElementById('idphoto').style.backgroundImage = `url('${selectedPhotoUrl}')`; }
    document.getElementById('fname').textContent = selectedPhotoName || text('fileFormats');
    updatePreview();
  }

  langSelect.addEventListener('change', event => applyLanguage(event.target.value));
  form.addEventListener('focusin', event => {
    const target = event.target;
    if (target && target.id) localStorage.setItem(LAST_FIELD_KEY, target.id);
  });
  form.addEventListener('input', updatePreview);
  form.addEventListener('change', updatePreview);
  function syncCheckboxValues() {
    document.querySelectorAll('[data-checkbox-group]').forEach(group => {
      const field = document.getElementById(group.dataset.checkboxGroup);
      field.value = Array.from(group.querySelectorAll('input:checked')).map(input => input.value).join(', ');
    });
  }
  form.addEventListener('change', event => {
    if (event.target.matches('[data-checkbox-group] input')) syncCheckboxValues();
    syncCertificateVisibility();
  });
  document.getElementById('pasport').addEventListener('input', event => {
    const passportId = normalizePassport(event.target.value);
    if (passportId) { chatUserId = passportId; sessionStorage.setItem(CHAT_USER_KEY, chatUserId); syncNotifications(); syncAdminReplies(); }
  });
  photoInput.addEventListener('change', event => { const file = event.target.files[0]; if (!file) return; selectedPhotoName = file.name; const reader = new FileReader(); reader.onload = eventData => { selectedPhotoUrl = eventData.target.result; document.getElementById('thumbPreview').style.backgroundImage = `url('${selectedPhotoUrl}')`; updatePreview(); }; reader.readAsDataURL(file); });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    let valid = true;
    requiredIds.forEach(id => { const input = document.getElementById(id); if (!input.value.trim()) { setError(id, text('reqErr')); valid = false; } else clearError(id); });
    if (!selectedPhotoUrl && !photoInput.files.length) { setError('rasm', text('photoErr')); valid = false; } else clearError('rasm');
    const certificateInput = document.getElementById('sertifikat_fayl');
    if (document.getElementById('xalqaro_sertifikat').value === 'Bor' && !certificateInput.files.length) { setError('sertifikat_fayl', text('fileErr')); valid = false; } else clearError('sertifikat_fayl');
    const passportInput = document.getElementById('pasport_fayl');
    const existingApplication = JSON.parse(localStorage.getItem(DB_KEY) || '[]')
      .find(item => normalizePassport(item.pasport) === normalizePassport(document.getElementById('pasport').value));
    if (!passportInput.files.length && !existingApplication?.passportData) {
      setError('pasport_fayl', text('fileErr'));
      valid = false;
    } else clearError('pasport_fayl');
    if (!valid) { showToast(text('errorMsg')); return; }
    const data = readFields();
    data.id = `${Date.now()}`;
    data.userId = normalizePassport(data.pasport);
    chatUserId = data.userId;
    sessionStorage.setItem(CHAT_USER_KEY, chatUserId);
    data.status = 'pending';
    data.createdAt = new Date().toISOString();
    try {
      data.certificateData = await fileToDataUrl(document.getElementById('sertifikat_fayl').files[0])
        || existingApplication?.certificateData
        || '';
      data.passportData = await fileToDataUrl(document.getElementById('pasport_fayl').files[0])
        || existingApplication?.passportData
        || '';
      const applications = JSON.parse(localStorage.getItem(DB_KEY) || '[]').filter(item => item.userId !== data.userId);
      applications.push(data);
      localStorage.setItem(DB_KEY, JSON.stringify(applications));
      localStorage.setItem(LAST_KEY, JSON.stringify(data));
      showToast(text('successMsg'));
      updatePreview();
    } catch (error) { showToast(text('dbErr')); console.error(error); }
  });

  function fileToDataUrl(file) { return new Promise((resolve, reject) => { if (!file) { resolve(''); return; } const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }

  document.getElementById('clearBtn').addEventListener('click', () => { form.reset(); selectedPhotoUrl = ''; selectedPhotoName = ''; syncCheckboxValues(); syncCertificateVisibility(); document.querySelectorAll('.field-group').forEach(group => group.classList.remove('invalid')); document.querySelectorAll('.err-msg').forEach(error => error.textContent = ''); document.getElementById('thumbPreview').style.backgroundImage = ''; document.getElementById('idphoto').style.backgroundImage = ''; updatePreview(); document.getElementById('fname').textContent = text('fileFormats'); showToast(text('clearedMsg')); });
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('downloadBtn').addEventListener('click', () => { const data = readFields(); data.createdAt = new Date().toISOString(); const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })); link.download = 'anketa_malumotlari.json'; link.click(); URL.revokeObjectURL(link.href); });

  document.getElementById('capDate').textContent = new Date().toLocaleDateString();
  document.getElementById('idNo').textContent = `№ ${Math.floor(100000 + Math.random() * 900000)}`;
  applyLanguage(currentLang);
  syncCheckboxValues();
  syncCertificateVisibility();
});
