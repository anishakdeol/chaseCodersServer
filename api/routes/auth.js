const express = require('express');
const authController = require('../controllers/auth.js')
const router = express.Router();

router.use(express.json());

router.post('/login', authController.login);
router.post('/register', authController.register);


module.exports = router
