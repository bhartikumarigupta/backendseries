const fs = require("fs");

const path = require("path");
const dataFolder = path.join(__dirname, 'data'); // __dirname is a global variable that gives the directory name of the current module
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder); // Create the data folder if it doesn't exist
    console.log(`Data folder created at ${dataFolder}`);
}
const filePath = path.join(dataFolder, 'example.txt');
// sync way of creating a file
fs.writeFileSync(filePath, 'Hello, this is a test file created using Node.js fs module.');
console.log(`File created at ${filePath}`);
const readcontent = fs.readFileSync(filePath, 'utf8');
console.log(`Content of the file: ${readcontent}`);
fs.appendFileSync(filePath, '\nThis is an appended line.');
console.log(`Content after appending: ${fs.readFileSync(filePath, 'utf8')}`);
// Asynchronous way of reading a file
const asynFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asynFilePath, 'This is an asynchronous file creation example.', (err) => {
    if (err) {
        console.error(`Error creating file: ${err.message}`);
    }
    else {
        console.log(`Asynchronous file created at ${asynFilePath}`);
        // Read the file asynchronously
        fs.readFile(asynFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
            }
            else {
                console.log(`Content of the asynchronous file: ${data}`);
                // Append to the file asynchronously
                fs.appendFile(asynFilePath, '\n This is an appended line in the async file.', (err) => {
                    if (err) {
                        console.error(`Error appending to file: ${err.message}`);
                    }
                    else {
                        console.log(`Content after appending in async file: ${fs.readFileSync(asynFilePath, 'utf8')}`);
                    }
                }
                )
            }
        })

    }

}
)
