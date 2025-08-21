console.log("Welcome to node js class");
console.log("This is the first class of node js");
// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr, ' ,this is an array');
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("This message is the last line of the sync code"); // this line execute first after 2sec the above line will execute
// setTimeout is an asynchronous function, it will not block the execution of the code 
// The code will continue to execute while the timeout is waiting to complete
// setTimeout is used to delay the execution of a function by a specified number of milliseconds
// setTimeout is a built-in function in JavaScript that allows you to execute a function after a specified number of milliseconds
// setTimeout is commonly used to create delays in code execution, such as for animations or to wait for a certain condition to be met before executing a function
// setTimeout is a non-blocking function, meaning it does not stop the execution of the code while it is waiting to complete    
// setTimeout is a function that takes two arguments: a callback function and a delay in milliseconds
// setTimeout is a way to execute a function after a certain amount of time has passed
// setTimeout is a way to create a delay in code execution, allowing you to control the timing of when a function is executed
// setTimeout is a way to execute a function after a certain amount of time has passed, without blocking the execution of the code
// function in javascript 
function Addition(num1, num2) {
    return num1 + num2;
}
console.log(Addition(5, 15));