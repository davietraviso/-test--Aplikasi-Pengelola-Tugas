const express = require('express')
const router = express.Router()
const TugasModel = require('../models/tugasModel')

router.get('/', async (req, res) => {
  res.status(200).json({
    metadata: "tugas enpoind"
  })
})


router.post('/', async (req, res) => {
  const {title, description} = req.body
  res.status(201).json({
    data: {title, description},
    metadata: "text  berhasil di tambahkan"
  })
})



module.exports = router