function delayFn(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
async function delayGreet(name) {
    console.log(`Starting delay for greeting ${name}`);
    await delayFn(10000);
    console.log(`Hello, ${name}! Welcome to the async-await world.`);
}
console.log("Async-await lecture started");
delayGreet("Bharti Gupta");
async function divideAsync(num1, num2) {
    try {
        if (num2 == 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;

    }
    catch (error) {
        console.error(`Error occurred: ${error.message}`);
    }
}
async function mainFun() {
    console.log(await divideAsync(15, 5));
    console.log(await divideAsync(15, 0));

}
mainFun();