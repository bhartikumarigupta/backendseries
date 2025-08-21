const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    }
    const modifiedData = data.toUpperCase();
    fs.writeFile('sample1.txt', modifiedData, (err) => {
        if (err) {
            console.error(`Error writing file: ${err.message}`);
            return;
        }
        console.log(`File written successfully with modified data.`);
        fs.readFile('sample1.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(`Error  while reading file sample1.txt: ${err.message}`);
                return;
            }
            console.log(`Content of the file sample1.txt: ${data}`);
        })

    })
})
console.log("This is the good example of callback function in Node.js");
// This code reads a file named 'input.txt', converts its content to uppercase, writes it to a new file named 'sample1.txt',
// and then reads the new file to display its content. It uses callback functions to handle asynchronous operations.
// The code also includes error handling to catch any issues that may arise during file operations.
// The final console.log statement is executed immediately after the readFile operation is initiated, demonstrating the asynchronous nature of Node.js. 
