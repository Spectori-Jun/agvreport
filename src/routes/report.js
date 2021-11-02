const express = require('express')
const router = express.Router()

router.use('/report', (res, req) => {
  req.render('report')
})

module.exports = router