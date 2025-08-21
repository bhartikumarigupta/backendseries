// module.exports -> export
// require -> import

const firstmodule = require('./first-module');
try {


    console.log(firstmodule.Addition(5, 15));
    console.log(firstmodule.Substraction(5, 15));
    console.log(firstmodule.Multiplication(5, 15));
    console.log(firstmodule.Division(5, 15));


    console.log(firstmodule.Division(5, 0)); // This will throw an error because division by zero is not allowed
}
catch (e) {
    console.error("An error occurred:", e.message);
}
// module wrapper
// (
// function (exports, require, module, __filename, __dirname) {
// // module code goes here

// }
// )
