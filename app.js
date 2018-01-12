"use strict";
//string type inferred
var myName = 'Tomcat';
// myName = 28;
// number type inferred
var myAge = 27;
// myAge = 'Tomcat';
// boolean type inferred
var hasHobbies = false;
// hasHobbies = 1;
// assign type explicitly
var myRealAge;
myRealAge = 27;
// array type
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// tuples -arrays with different types
var address = ['Superstreet', 99];
// enum type
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 13] = "Green";
    Color[Color["Blue"] = 14] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any type
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// function type
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void type
function sayHello() {
    console.log('Hello');
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// object types
var userData = {
    name: 'Tomcat',
    age: 27
};
// userData = {
//   a: 'Hello',
//   b: 22
// };
// complex object type
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
// check type
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// never type
function neverReturns() {
    throw new Error('An error');
}
// nullable type
var canBeNull = 13;
canBeNull = null;
console.log(canBeNull);
var canAlsoBeNull;
console.log(canAlsoBeNull);
var canThisBeAny = null;
canThisBeAny = 13;
console.log(typeof (canThisBeAny));
console.log(canThisBeAny);
