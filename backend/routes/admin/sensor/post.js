const router = require('express').Router()
const passport = require('./../../../auth/passport')
const sensor = require('../../../models/sensor/sensor')

router.post('/',
  passport.authenticate('default', { session: false }),
  (req, res, next) => {

    const body = req.body

    sensor.create({
      serial: body.serial,
      name: body.name,
      type: body.type
    })
      .then((created_sensor) => {
        return res.json(created_sensor)
      })

  }
)

module.exports = router
