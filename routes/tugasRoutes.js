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

router.put('/:id', async (req, res) => {
  const {id} = req.params
  const tasks = await TugasModel.findByPk(id)
  if(!tasks) {
    return res.status(404).json({error: "id invalid"})
  }
  const {title, description} = req.body
  const update = await tasks.update({
    title, description
  })
  if(update) {
    res.status(201).json({
      data: tasks,
      metadata: "text  berhasil di update"
    })
  }
})




module.exports = router