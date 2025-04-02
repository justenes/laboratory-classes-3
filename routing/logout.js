const express = require('express');
const { getInfoLog } = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  getInfoLog(req);
  res.render('logout.html');
});

module.exports = router;
