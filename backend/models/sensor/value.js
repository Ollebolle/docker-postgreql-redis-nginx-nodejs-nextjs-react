const Sequelize = require('sequelize')
const sequelize = require('../../db/config')

const value = sequelize.define('value',
  {
    value: {
      type: Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = value
