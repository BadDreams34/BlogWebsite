var express = require('express');
var router = express.Router();
const emmitter = require('node:events')
const emit = new emmitter()
emit.on('start', ()=> {
  console.log(2)
})

// Emit the 'start' event
emit.emit('start')

// Create a URL object and log it
const myurl = new URL('https://www.google.com')
console.log(myurl)

// Listen for 'multisum' event
emit.on('multisum', (first, second) => console.log(first + second))

// Listen for 'once' event (fires only once)
emit.once('onceEvent', () => console.log('This will only log once'))
emit.emit('onceEvent')
emit.emit('onceEvent') // This won't log

// Remove a specific listener using off()
// Example: define a listener function
function handler(first, second) {
  console.log('off removed this:', first + second)
}
emit.on('offEvent', handler)
emit.emit('offEvent', 3, 4) // Will log
emit.off('offEvent', handler) // Remove the handler
emit.emit('offEvent', 3, 4) // Won't log

// Remove all listeners for an event
emit.on('removeAll', () => console.log('removeAll 1'))
emit.on('removeAll', () => console.log('removeAll 2'))
emit.emit('removeAll') // Both listeners will log
emit.removeAllListeners('removeAll')
emit.emit('removeAll') // No output, listeners removed

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
emit.emit('multisum', 1, 2)
module.exports = router;


