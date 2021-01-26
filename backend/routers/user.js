const express = require('express');
const userController = require('../controllers/user');

const userRoutes = express.Router();

userRoutes.get('/get-product', userController.getProducts);

module.exports = userRoutes;