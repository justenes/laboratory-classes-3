const express = require('express');
const path = require('path');
const { getInfoLog } = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  getInfoLog(req);
  res.render('home.html');
});

module.exports = router;
