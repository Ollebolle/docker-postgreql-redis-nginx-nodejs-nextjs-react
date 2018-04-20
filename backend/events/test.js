const events = require('./index');

events.on('test', () => {
  console.log('\x1b[32m', 'Test event received!!');
});
