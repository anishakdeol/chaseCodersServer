const express = require('express');
const userController = require('../controllers/users.js')
const router = express.Router();

router.use(express.json());

router.get('/user/all', userController.all);
router.get('/user/:username', userController.findByUsername);

module.exports = router;
