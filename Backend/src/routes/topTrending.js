const express = require('express');
const router = express.Router()
const {get} = require( "../controllers/topTrending.controller");

router.get('/', get)

module.exports = router;
