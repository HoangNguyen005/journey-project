const express = require('express');
const router = express.Router()

const {get, add, remove} = require('../controllers/cart.controller.js')
const {authenticateToken} = require('../middleware/authenticateToken.js')


router.get('/get', authenticateToken, get)
router.post('/add', authenticateToken, add)
router.delete('/remove',authenticateToken, remove)

module.exports = router;