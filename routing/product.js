const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const { STATUS_CODE } = require('../constants/statusCode');
const renderNewProductPage = require('../views/renderNewProductPage');

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/add-product.html'));
});

router.post('/add', (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  if (!name || !description) {
    return res.status(400).send('Both name and description are required!');
  }

  const productData = `Name: ${name}, Description: ${description}`;
  fs.writeFileSync('product.txt', productData);

  res.status(STATUS_CODE.FOUND).redirect('/product/new');
});

router.get('/new', (req, res) => {
  if (fs.existsSync('product.txt')) {
    const data = fs.readFileSync('product.txt', 'utf8');
    res.send(renderNewProductPage(data));
  } else {
    res.send(renderNewProductPage(null));
  }
});

module.exports = router;
