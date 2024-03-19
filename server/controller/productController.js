const asyncHandler = require('express-async-handler');
const Product = require('../model/Product');

// @desc create-product
// @route Post /product/create-product
// @access Private
const createProduct = asyncHandler(async (req, res) => {
  try {
    const { shopId } = req.body;
    const products = await Product.find();
    res.status(201).json({
      success: true,
      products
    });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

// @desc get-products
// @route GET /product/all-products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      success: true,
      products
    });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});
module.exports = { getAllProducts };
