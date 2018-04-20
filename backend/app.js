const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const swStats = require('swagger-stats')
const passport = require('./auth/passport')
const app = express()

app.use(swStats.getMiddleware({}))
app.use(morgan('dev'))

app.use(cors({ preflightContinue: true }))
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize())

// Initiate db models
const models = require('./models')

// Health endpoint
const health = require('./routes/health')

app.use('/health', health)

// User endpoints
const user_get = require('./routes/user/get')
const register = require('./routes/user/auth/register')
const login = require('./routes/user/auth/login')
const push_token = require('./routes/user/push_token')

app.use('/user', user_get)
app.use('/user/register', register)
app.use('/user/login', login)
app.use('/user/push_token', push_token)

// Admin
const admin_login = require('./routes/admin/auth/login')

app.use('/admin/login', admin_login)

// Sensors
const sensors_get = require('./routes/admin/sensor/get')
const sensor_post = require('./routes/admin/sensor/post')
const value_post = require('./routes/value/post')

app.use('/sensors', sensors_get)
app.use('/sensor', sensor_post)
app.use('/sensor/value', value_post)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')

  err.status = 404
  next(err)
})

// const http = require('http').Server()
// const io = require('socket.io')(http)

const io = require('socket.io').listen(8383)

const socket = io.of('/socket')

socket.on('connection', function(client){
  client.join('user_2')
  console.log('\x1b[32m', 'Socket user connected')
  socket.to('user_5').emit('msg', 'Testing yo yo')
  // socket.emit('msg', 'Testing yo yo')
})

const events = require('./events')

events.on('new_value', (created_value, user_id) => {
  console.log('\x1b[32m', 'Test event received!!')
  socket.to('user_' + user_id).emit('new_value', created_value)
  // socket.to('user_5').emit('msg', 'Testing yo yo')
})



// io.on('connection', (client) => {
//   console.log('\x1b[32m', 'Socket user connected')
//   // console.log(socket.emit)
//   io.emit('msg', 'Testing yo yo')
//   client.on('disconnect', () => {
//     console.log('\x1b[32m', 'Socket user disconnected')
//   })
//   client.on('msg', (msg) => {
//     console.log('Msg from client', msg)
//   })
// })


// http.listen(8383, () => {
//   console.log('Socket.io up & listening')
// })

app.listen(process.env.PORT, () => {
  console.log('\x1b[32m', `Server - up & running on port ${ process.env.PORT }!`)
})

module.exports = app
