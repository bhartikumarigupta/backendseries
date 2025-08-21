

function delayFunc(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}
console.log("promises lecture started");
delayFunc(2000).then(() => {
    console.log("This message is delayed by 2 seconds using promises");

});
console.log("This message is the last line of the sync code after promises delay");
function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 == 0) {
            reject(new Error("Division by zero is not allowed"));
        }
        resolve(num1 / num2);
    })
}
divideFn(15, 5).then((result) => {
    console.log(`The result of division is: ${result}`);
});
divideFn(15, 0).then((result) => {
    console.log(`The result of division is: ${result}`);
}).catch((error) => {
    console.error(`Error occurred: ${error.message}`);
});