const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('uncaughtException', (error) => {
  console.error(err);
});

emitter.on('order_placed', () => {
  console.log('\x1b[32m', 'New order has been placed!!');
});


module.exports = emitter;