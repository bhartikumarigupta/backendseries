const EventEmitter = require('events');
class MyCustomEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello";
    }

    // Custom method to emit a greeting event
    greet(name) {
        this.emit('greeting', `${this.greeting} ,${name}`);
    }
    // Custom method to register a listener for the greeting event


}
const myCustomEmitter = new MyCustomEventEmitter();
myCustomEmitter.on('greeting', (message) => {
    console.log(message);
}
);
// Emitting the greeting event
myCustomEmitter.greet('Bharti Gupta');

