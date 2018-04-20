const router = require('express').Router()
const passport = require('./../../../auth/passport')
const sensor = require('../../../models/sensor/sensor')

router.get('/',
  passport.authenticate('admin', { session: false }),
  (req, res) => {
    console.log('Get sensors')
    sensor.findAll()
      .then((sensors) => {
        return res.json(sensors)
      })
  }
)

module.exports = router
