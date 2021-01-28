const express = require('express');
const userController = require('../controllers/user');

const userRoutes = express.Router();

userRoutes.get('/get-product', userController.getProducts);

userRoutes.post('/post-order', userController.postOrder);

userRoutes.get('/get-order/:email', userController.getOrder);

module.exports = userRoutes;