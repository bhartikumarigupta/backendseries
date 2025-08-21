

console.log("Welcome to Node.js module system exploration");
console.log("file_name in wrapper explorer:", __filename);
console.log("directory_name in wrapper explorer :", __dirname);
module.exports.greet = function (name) {
    console.log(`Hello, ${name}! Welcome to the Node.js module system.`);

}
