const EventEmitter = require('events');
const myFirstEmitter = new EventEmitter();
// Registering an event listener for the 'greet' event
myFirstEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to the Node.js event emitter system.`);
});
// Emitting the 'greet' event
myFirstEmitter.emit('greet', 'Bharti Gupta');
