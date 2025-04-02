const express = require('express');
const { getProcessLog } = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  getProcessLog('Użytkownik wylogował się i aplikacja zostanie zamknięta.');
  res.send('<h2>Serwer został zatrzymany</h2>');
  process.exit();
});

module.exports = router;
