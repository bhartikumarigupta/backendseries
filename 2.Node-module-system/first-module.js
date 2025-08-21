

function Addition(num1, num2) {
    return num1 + num2;
}
function Substraction(num1, num2) {
    return num1 - num2;
}
function Multiplication(num1, num2) {
    return num1 * num2;
}
function Division(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed");

    }
    return num1 / num2;
}
module.exports = {
    Addition,
    Substraction,
    Multiplication,
    Division
};
