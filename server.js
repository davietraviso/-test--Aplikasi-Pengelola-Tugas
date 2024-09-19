const express = require('express')
const cors = require('cors')
const port = 3200

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log("database ready"))

const tugasEnpoint = require('./routes/tugasRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/tasks', tugasEnpoint)


app.listen(port, () => console.log(`port running to ${port}`))