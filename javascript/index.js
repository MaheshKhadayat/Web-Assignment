// const PI = 3.14159;
// let radius;
// let circum;

// document.getElementById("mybutton").onclick = function () {
//   radius = document.getElementById("myid").value;
//   radius = Number(radius);
//   circum = 2 * PI * radius;
//   document.getElementById("myans").textContent = circum + " cm";
// };

////=====================================================================================================

// document.getElementById("mysubmit").onclick = function () {
//   radius = document.getElementById("my").value;
//   radius = Number(radius);
//   let area = PI * radius * radius;
//   document.getElementById("myH1").textContent = "Answer : " + area + " cm^2";
// };

////=====================================================================================================

// let count = 0;
// document.getElementById("Increment2").onclick = function () {
//   document.getElementById("mycount").textContent = count += 2;
// };
// document.getElementById("Increment").onclick = function () {
//   document.getElementById("mycount").textContent = ++count;
// };
// document.getElementById("Reset").onclick = function () {
//   count = 0;
//   document.getElementById("mycount").textContent = count;
// };
// document.getElementById("Decrement").onclick = function () {
//   document.getElementById("mycount").textContent = --count;
// };
// document.getElementById("Decrement2").onclick = function () {
//   document.getElementById("mycount").textContent = count -= 2;
// };

//=====================================================================================================

// document.getElementById("check").onclick = function() {
//   let guess = Number(document.getElementById("guess").value);
//   let randomNumber = Math.floor(Math.random() * 10) + 1;

//   console.log("User Guess:", guess);
//   console.log("Random Number:", randomNumber);

//   if (guess === randomNumber) {
//     document.getElementById("ans").textContent = "You won! Woohoo";
//   } else {
//     document.getElementById("ans").textContent = "You lost womp womp. The correct number was " + randomNumber;
//   }

//   console.log(Math.PI);
// };

//=====================================================================================================

//Math functions

// let x = 3.45;
// let y = -81;
// console.log(Math.abs(x));         // 3.45       => Absolute value (no change 'cause x is already positive)
// console.log(Math.floor(x));       // 3          => Rounds DOWN to nearest integer
// console.log(Math.ceil(x));        // 4          => Rounds UP to nearest integer
// console.log(Math.trunc(x));       // 3          => Just chops off the decimal, no rounding
// console.log(Math.round(x));       // 3          => Rounds to the nearest integer (down here 'cause .45)

// console.log(Math.sqrt(y));        // NaN        => Square root of a negative? Nah fam, that's imaginary
// console.log(Math.pow(Math.round(x), 2)); // 9   => Math.round(3.45) = 3, 3^2 = 9

// console.log(Math.log(y));         // NaN        => Log of a negative number? That's a no-go in real numbers
// console.log(Math.sin(x));         // ~0.301     => Sine of 3.45 radians
// console.log(Math.cos(x));         // ~-0.953    => Cosine of 3.45 radians
// console.log(Math.tan(x));         // ~-0.316    => Tangent of 3.45 radians

// console.log(Math.sign(y));        // -1         => y is negative, so it returns -1
// console.log(Math.max(x, y));      // 3.45       => The bigger of the two
// console.log(Math.min(x, y));      // -81        => The smaller of the two

//=====================================================================================================

// const check = document.getElementById("mycheck");
// const submit = document.getElementById("submit");

// submit.onclick  = function() {
//  if (check.checked){
//    document.getElementById("textarea").textContent = "clicked"
//  }else{
//    document.getElementById("textarea").textContent = "not clicked"
//  }
// }

// let age = 13
// let message = age >= 18 ? "Your adult" : "Your a minorrrrrrrr"
// console.log(message);

// let name = "";
// let print = name ? "Hello, " + name : "Hello stranger"
// console.log(print);

//=====================================================================================================

// string methods
// let user = "zakwan"
// console.log(user.charAt(0))
// console.log(user.indexOf("k"))
// console.log(user.lastIndexOf("a"))
// console.log(user.length);
// let z = " hello world ";
// console.log(z.trim("world"));
// console.log(z.toUpperCase())
// console.log(z.toLowerCase())
// console.log(z.repeat(3))
// console.log(z.startsWith("h"));//bool value
// console.log(z.includes("z"))//bool value
// let n = "12-23-34-45-45"
// console.log(n.replaceAll("-", ""));// - with no  value
// console.log(n.split("-"));//array of values
// console.log(n.split("-").join(","));//array of values with comma
// let a = "zakwan"
// console.log(a.slice(0, 3))//slice method
// console.log(user.charCodeAt(0)) //ascii number

//=====================================================================================================

// -------------method with out chaining
// let a = window.prompt("Enter name")

// a = a.trim()
// let letter = a.charAt(0)
// letter = letter.toUpperCase()

// let rest = a.slice(1)
// rest = rest.toLowerCase()
// a = letter + rest;
// console.log(a);

// ----------------method with chaining-------

// let a = window.prompt("Enter your name")
// a = a.trim().charAt(0).toUpperCase() + a.trim().slice(1).toLowerCase()
// console.log(a);

// function HappyBirthday(name, age) {
//   console.log("Happy birthday too you");
//   console.log("Happy birthday too you");
//   console.log(`Happy birthday too ${name}`);
//   console.log(`your ${age} dammmmmmmmmmmmmmmmm`)
// }
// let name = "Tom"

// HappyBirthday("gibbreish", 45);

//=====================================================================================================

// function Add(x, y) {
//   return x + y
// }
// function Sub(x, y) {
//   return x - y
// }
// console.log(Add(2, 3));
// console.log(Sub(2, 3));

// const btn = document.getElementById("mit");
// const input = document.getElementById("text");
// const ans = document.getElementById("ans");

// function perform() {
//   let n = parseFloat(input.value);

//   if (!isNaN(n)) {
//     let result = (9 / 5) * n + 32;
//     log.textContent = `Answer is ${result.toFixed(2)}°F 🔥`;
//   } else {
//     log.textContent = "Bruh, enter a valid number 😏";
//   }
// }

// btn.addEventListener("click", perform);

//=====================================================================================================

//Arrays

// let fruits = ["apple", "watermelon", "banana"];

// fruits.push("mango");
// fruits.pop();
// fruits.unshift("grape");
// fruits.shift();
// console.log(fruits.length);
// console.log(fruits.indexOf("watermelon"));

// fruits.sort().reverse();

// enhanced for loop
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log(fruits);

//=====================================================================================================

//spread operator
//... ->allows an iterable such as array or string to be expanded into seperate elements(unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max); // Output: 5
// console.log(min); // Output: 1

// let username = "Helo world";
// let letters = [...username];
// console.log(letters); // Output: ['H', 'e', 'l', 'o',' ', 'w', 'o', 'r', 'l', 'd']

// let cars = ["BMW", "Mercedes", "Audi"];
// let bike = ["splender", "pulsar"];
// let combine = [...cars, ...bike, "ktm"];
// console.log(combine);
//=====================================================================================================

// Rest parameters ->   allows a function to work with variable number of arguments by bundling then into an array
//                      (...) -> expands an array into separate arguments
//                      (...rest) -> bundles seperate elements into an array (used inside a parameter)

// function openfrige (...foods) {
//   console.log(...foods);
// }

// let food1 = "pizza"
// let food2 = "burger"
// let food3 = "spagethi"
// let food4 = "crossoiant"
// let food5 = "something"

// openfrige(food1, food2, food3, food4, food5)

// function sum (...numbers) {
//   let sum = 0 ;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// const number1 = 6;
// const number2 = 7;
// const number3 = 8;
// const number4 = 9;
// const number5 = 10;
// console.log(sum(number1, number2, number3, number4, number5));

//=====================================================================================================

// //Dice program

// function rolldice () {
//   const NumOfDice = document.getElementById("NumOfDice").value;
//   const diceResult = document.getElementById("diceResult");
//   const diceImages = document.getElementById("diceImages");

//   const values = [];
//   const images = [];
//   let sum = 0;

//   for (let i = 0; i < NumOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     sum +=value;
//     values.push(value)
//     images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
//   }
//   console.log(values)
//   console.log(sum);
//   diceResult.textContent = `You rolled a ${values.join(', ')} and the sum is ${sum} `;
//   diceImages.innerHTML = images.join('');
// }

//=================================================================================================================

// Random password genrater

// function generatePassword(
//   passwordLength,
//   includelowercase,
//   includeuppercase,
//   includesnumbers,
//   includesymbols
// ) {
//   const length = passwordLength;
//   const lowercase = "abcdefghijklmnopqrstuvwxyz";
//   const uppercase = "ABCDEFGHOJKLMNOPQRSTUVWXYZ";
//   const symbols = "~`!@#$%^&*()_+=-{}[];:'<,>.?/|";
//   const numbers = "0123456789";

//   let allowedchars = "";
//   let password = "";

//   allowedchars += includelowercase ? lowercase : "";
//   allowedchars += includeuppercase ? uppercase : "";
//   allowedchars += includesnumbers ? numbers : "";
//   allowedchars += includesymbols ? symbols : "";

//   if (length <= 0) {
//     return "Password length must be at least 1";
//   }
//   if (allowedchars.length === 0) {
//     return "At least one character type must be selected";
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedchars.length);
//     password += allowedchars[randomIndex];
//   }
//   return password;
// }

// const passwordLength = 12;
// const includelowercase = true;
// const includeuppercase = true;
// const includesnumbers = true;
// const includesymbols = true;
// pass = document.getElementById("pass");
// pass.textcontent = `The generated password is: " + generatePassword(passwordLength, includelowercase, includeuppercase, includesnumbers, includesymbols)`;
// console.log(
//   "The generated password is: " +
//     generatePassword(
//       passwordLength,
//       includelowercase,
//       includeuppercase,
//       includesnumbers,
//       includesymbols
//     )
// );

//===================================================================================================

////Callbacks = a function that is passed has an argument to another function

// hello(goodbye);

// function hello (callback) {
//   console.log("Hello");
//   callback();
// }

// function goodbye () {
//   console.log("goodbye!");
// }

// sum(display, 5, 6);
// function sum (callback, x, y) {
//   let result = x + y;
//   callback(result);
// }
// function display (result) {
//   console.log(result)
// }

//=====================================================================
////forEach = method to iterate over elements of an array and apply specified function to each element

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(squares);
// numbers.forEach(display);

// function squares(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function display(element) {
//   console.log(element);
//}

// // Define the array of fruits
// const fruits = ["apple", "banana", "custard apple"];

// // Define a function to capitalize the first letter of each fruit
// function capitalizeFruit(fruit, index, array) {
//   array[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
// }

// // Define a function to convert each fruit to lowercase
// function lowercaseFruit(fruit, index, array) {
//   array[index] = fruit.toLowerCase();
// }

// // Define a function to display each fruit
// function displayFruit(fruit) {
//   console.log(fruit);
// }

// // Capitalize each fruit and display the result
// fruits.forEach(capitalizeFruit);
// fruits.forEach(displayFruit);

////----------------Arrow function--------------------

// let time = () => {
//   console.log("Hello world");
// }
// time();

// let a = 15, b = 6;
// let sum = (a, b) => {
//   return a - b;
// }
// console.log(sum(a, b));

////time is the function name and () is used to send paramenters

////----------------- setTimeout() and setInterval() ---------------

// console.log("Before timeout");

// setTimeout(() => {
//     console.log("Hello after 2 seconds!");
// }, 2000);

// console.log("After timeout");

////-------set timeout but acts like set interval----------
// let i = 0;
// let delayedCount = () => {
//     setTimeout(() => {
//         console.log("Run #" + i);
//         i++;
//         if (i < 5) delayedCount(); // Calls itself recursively
//     }, 1000);
// }
// delayedCount();

////and also we can use set interval for this
// let i = 0;
// function delayedCount() {
//     setTimeout(() => {
//         console.log("Run #" + i);
//         i++;
//         if (i < 5) delayedCount(); // Calls itself recursively
//     }, 1000);
// }
// delayedCount();

// let seconds = 5;
// let countdown = setInterval(() => {
//     console.log(seconds);
//     seconds--;
//     if (seconds === 0) {
//         console.log("Go!");
//         clearInterval(countdown);
//     }
// }, 1000);

// console.log("Hello world");
// let name = "Trump";
// document.writeln(name);
// let A = 10;
// let B = 30;
// let C = A + B;
// document.writeln(C);

// let C = document.getElementById("text");
// let dis = document.getElementById("log");
// document.getElementById("mit").onclick() = function () {
//   let f = (9.0/5.0 * C ) + 32
//   console.log(f);
// }

// let today = new Date();
// const days = [
//   "Sunday",
//   "monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(days[today.getDay()]);

// function getWeekday() {
//   const dateValue = document.getElementById("dateInput").value;
//   if (!dateValue) {
//     document.getElementById("dayResult").textContent = "Please select a date.";
//     return;
//   }

//   const date = new Date(dateValue);
//   const weekdays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const dayName = weekdays[date.getDay()];

//   document.getElementById("dayResult").textContent = "That day is: " + dayName;
// }

// const date = new Date();
// const months = [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "novemeber",
//   "december",
// ];
// month = months[date.getMonth()];
// console.log(month);
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let text;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);
// if (someday > today) {
//   console.log("today is before january 14 2100");
// } else {
//   console.log("today is afer january 14 2100");
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const person = { name: "zakwan", age: 16, gender: "Male" };

// for (let x in person) {
//   console.log(person[x]);
// }

// let something = ["apple", "banana", "cider", "durian"];

// for (let fruit of something) {
//   console.log(fruit);
// }
// x = 0;
// y = 10;
// x = x ^ y;
// console.log(x);

arr = ["apple", 1, true, 3.0, -321];
arr.push("Bogos binted");
for (let a of arr) {
  console.log(a);
}
