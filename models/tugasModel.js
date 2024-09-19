const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class Tugas extends Model {}

Tugas.init({
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Tugas"
})

module.exports = Tugas