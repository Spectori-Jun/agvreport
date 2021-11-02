const express = require('express')
const router = express.Router()

router.use('/', (res, req) => {
  req.render('index')
})

module.exports = router