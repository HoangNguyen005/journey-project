const express = require('express');
const router = express.Router()
const {authenticateToken} = require('../middleware/authenticateToken.js')

const { register, login, getUser, edit, changePassword } = require( "../controllers/user.controller");

router.post('/register', register)
router.post('/login', login)
router.patch('/edit', authenticateToken, edit)
router.get('/get', authenticateToken,  getUser)
router.put('/change-password', authenticateToken,  changePassword)

module.exports = router;
