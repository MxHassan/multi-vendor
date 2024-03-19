const express = require('express');
const { getAllProducts } = require('../controller/productController');
const router = express.Router();

router.get('/all-products', getAllProducts);

module.exports = router;
