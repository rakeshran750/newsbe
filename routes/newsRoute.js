const express = require('express')
const router = express.Router();
const {getNewsHtml, getNewsdata}=require('../controller/newsController')

router.get('/today/data',getNewsdata);

module.exports = router;