const router = require('express').Router()
const passport = require('./../../auth/passport')
const user = require('../../models/user')
const sensor = require('../../models/sensor/sensor')
const value = require('../../models/sensor/value')

router.get('/',
  passport.authenticate('default', { session: false }),
  (req, res) => {
    console.log(`Find user by id: ${ req.user.id}`)
    user.findById(req.user.id, {
      include: [
        {
          model: sensor,
          include: [
            {
              model: value
            }
          ]
        }
      ]
    }).then((found_user) => {
      let user_info = found_user.get({ plain: true })

      delete user_info.password
      return res.json(user_info)
    })
  }
)

module.exports = router
