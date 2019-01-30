'use strict';

var square = function square(x) {
    return x * x;
};
console.log(square(4));
// const squareArrow =(x) =>{
// return x*x;
// }
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log(squareArrow(2.5));
var fullName = "Sravani Cheripalli";
var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log('FirstName is ==' + getFirstName(fullName));
