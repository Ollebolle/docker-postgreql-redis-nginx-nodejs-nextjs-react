const Sequelize = require('sequelize')
const sequelize = require('../../db/config')

const sensor = sequelize.define('sensor',
  {
    serial: {
      type: Sequelize.STRING,
      unique: true
    },
    name: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = sensor
