// todo: no. 1

let carName = "Volvo";

// todo: no. 2

let firstName = "John";
let lastName = "Doe";
let age = 35;

// todo: no. 3

let x = 10;
let y = 5;
x *= y; // value of x = 50

// todo: no. 4

let length = 16; // data type is number
let lastName = "Johnson"; // data type is string

const x = {
  firstName: "John",
  lastName: "Doe",
}; // data type is object

// todo: no. 5

function myFunction() {
  alert("Hello World!");
}

myFunction(); // in node js it will throw an referance error called 'alert is not defined', but on the browser it will show an alert message;

// todo: no. 6

let person = {
  firstName: "John",
  age: 50,
};

alert(`${person.firstName} is ${person.age}`);

// todo: no. 7

document.querySelector("button").addEventListener("click", function () {
  alert("button was clicked!");
}); // when button is clicked, an alert message will be shown "button was clicked!"

// todo: no. 8

// ? 1.
const cars = ["Volvo", "Jeep", "Mercedes"];
alert("cars length is "+cars.length);
// ? 2.
const brand = ["Volvo","Jeep","Mercedes"];
brand[0] = "Ford";

// todo: no. 9

// ? 1.
Math.random(); // generates a random number between 0 and 1
// ? 2.
Math.max(10, 20); // returns the largest number between 10 and 20
// ? 3.
Math.sqrt(9); // returns the square root of 9

// todo: no. 10

// ? 1.
let x = 10;
let y = 5;

alert(x > y); // this will alert true
// ? 2.

let age = 18;
age < 18 ? alert("Too young") : alert("Old enough"); // this will alert "Too young"