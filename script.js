//First lesson IF statements

// let random = Math.random();

// if (random > 0.5) {
//     console.log("your number is greater than 0.5!")
//     console.log(random)
// } else {
//     console.log("your number is \n less than 0.5")
//     console.log(random)
// }


//--------------------------------------


// Second lesson ELSE IF statement

// const dayOfWeek = prompt('ENTER A DAY');
// if (dayOfWeek === 'monday') {
//     console.log("UGHHH i hate mondays")
// } else if (dayOfWeek === 'saturday') {
//     console.log("I love sarudays")
// } else if (dayOfWeek === 'sunday') {
//     console.log("I love YOU")
// } else {
//     console.log("MEH")
// }

//--------------------------------------


// testing headlight

// let phrase = prompt('ENTER A COLOR').toLowerCase();

// if (phrase == 'green') {
//     console.log("GREEN LIGHT")
// } else if (phrase == 'yellow') {
//     console.log("YELLOW LIGHT")
// } else if (phrase == 'red') {
//     console.log("RED LIGHT")
// } else {
//     console.log("Invalid Color")
// }


//--------------------------------------


// const password = prompt("Please enter a new password");

// if (password.length >= 6) {
//     console.log("Long enough")
// } else {
//     console.log("Pssword too short")
// }

// if (password.indexOf(' ') === -1) {
//     console.log("No SPACE !")
// } else {
//     console.log("Password cannot contain spaces")
// }


//--------------------------------------

// an empty string is considered falsy

// const userInput = prompt("Enter something");

// if (undefined) {
//     console.log("TRUTHY!")
// } else {
//     console.log("FALSY!")
// }


//--------------------------------------

// using logical AND


// const password = prompt("enter you password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password")
// } else {
//     console.log("Invalid password")
// }


//--------------------------------------

// using logical OR
// defining negetive as invalid


// const age = prompt("enter a number of age");

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("10$")
// } else if (age >= 10 && age < 65) {
//     console.log("30$")
// } else {
//     console.log("Invalid age")
// }


//--------------------------------------


// let firstName = prompt("enter your first name");

// if (!firstName) {
//     firstName = prompt("TRY AGAIN!");
//     console.log("what a beautiful name you got!")
//     console.log(firstName)
// } else {
//     console.log("what a beautiful name you got!")
//     console.log(firstName)
// }