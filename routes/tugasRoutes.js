const express = require('express')
const router = express.Router()
const TugasModel = require('../models/tugasModel')

router.get('/', async (req, res) => {
  res.status(200).json({
    metadata: "tugas enpoind"
  })
})



module.exports = router