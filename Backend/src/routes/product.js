const express = require('express');
const router = express.Router()
const {get, create, getDetail, getByBrand, remove, edit, update} = require( "../controllers/product.controller");

router.get('/:slug', getDetail)
router.get('/brand/:slug', getByBrand)
router.delete('/remove/:id', remove)
router.get('/edit/:id', edit)
router.put('/put/:id', update)
router.post('/create', create)
router.get('/', get)

module.exports = router;