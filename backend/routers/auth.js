const express = require('express');
const authController = require('../controllers/auth');

const authRoutes = express.Router();

authRoutes.post('/sign-up', authController.SignUp);

authRoutes.post('/log-in', authController.LogIn);

module.exports = authRoutes;