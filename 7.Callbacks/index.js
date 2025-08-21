const fs = require('fs');
function Person(name, callbackfunc) {
    console.log(`Hello ${name}, welcome to the Node.js module system.`);
    callbackfunc();
} // This is a callback function that will be executed after the main function
// is executed. It can be used to perform additional actions, like logging the address.
function address() {
    console.log("Your address is 123 Main St, Springfield, USA.");
}
Person('Bharti Gupta', address);
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    }
    console.log(`Content of the file: ${data}`);

});