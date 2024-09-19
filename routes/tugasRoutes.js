const express = require('express')
const route = express.Router()

route.get('/', async (req, res) => {
  res.status(200).json({
    metadata: "tugas enpoind"
  })
})



module.exports = route