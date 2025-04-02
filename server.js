const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRouter = require('./routing/home');
const logoutRouter = require('./routing/logout');
const productRouter = require('./routing/product');
const killRouter = require('./routing/kill');
const { getInfoLog, getErrorLog } = require('./utils/logger');
const { STATUS_CODE } = require('./constants/statusCode');
const { PORT } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  getInfoLog(req);
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/product', productRouter);
app.use('/logout', logoutRouter);
app.use('/kill', killRouter);
app.use(homeRouter);

app.use((req, res) => {
  getErrorLog(`Nie znaleziono trasy: ${req.url}`);
  res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server działa na porcie ${PORT}`);
});
