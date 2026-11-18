const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname));
app.get('/', (request, response) => response.redirect('/intex.html'));
app.listen(port, () => {
  const url = `http://localhost:${port}/intex.html`;
  console.log(`Portal ${url}`);
  if (process.platform === 'win32') exec(`start "" "${url}"`);
});