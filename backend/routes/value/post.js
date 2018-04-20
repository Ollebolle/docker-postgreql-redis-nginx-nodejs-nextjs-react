const router = require('express').Router()
const passport = require('./../../auth/passport')
const value = require('../../models/sensor/value')
const event = require('../../events')

router.post('/',
  passport.authenticate('default', { session: false }),
  (req, res, next) => {

    const body = req.body
    console.log('New value received')
    console.log(body)

    value.create({
      value: body.value,
      sensorId: body.sensorId
    })
      .then((created_value) => {
        console.log('New value from user', req.user.id)
        event.emit('new_value', created_value, req.user.id)
        return res.send(200)
      })

  }
)

module.exports = router
