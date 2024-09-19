const express = require('express')
const router = express.Router()
const TugasModel = require('../models/tugasModel')

router.get('/', async (req, res) => {
  const {title, description} = req.body
  const tasks = await TugasModel.findAll({
    title, description
  })
  res.status(200).json({
    data: tasks,
    metadata: "tugas enpoind"
  })
})

router.post('/', async (req, res) => {
  const {title, description} = req.body
  const tasks = await TugasModel.create({
    title, description
  })
  res.status(201).json({
    data: tasks,
    metadata: "text  berhasil di tambahkan"
  })
})





module.exports = router