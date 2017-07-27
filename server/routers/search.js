var express = require('express');
var router = express.Router()
var controller = require('../controller/searchController')

router.get('/search', controller.search)
// router.get('/', (req,res) => {
//   console.log('aaa')
// })

module.exports = router;
