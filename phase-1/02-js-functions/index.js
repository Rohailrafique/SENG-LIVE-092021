// ❗ Use console.log() To Check Answers

// ✅ Defining Functions

// define a function 'printTemp' using function declaration that returns 'Today's temperature is 90 degrees fahrenheit'

// 💡 Check Answer:
// console.log(printTemp());

// define a function 'printTemp' using function expression that returns 'Today's temperature is 90 degrees fahrenheit'

// 💡 Check Answer:
// console.log(printTemp());

// define a function 'printTemp' using arrow syntax that returns 'Today's temperature is 90 degrees fahrenheit'

// 💡 Check Answer:
// console.log(printTemp());

// ✅ Declaring vs. Invoking Functions

// print a reference to the 'printTemp' function

// call function and evaluate logic

// ✅ Parameters vs Arguments

// using the printTemp function again, let's define a parameter 'temperature'

// how can we use the paramater to make our code more dynamic?

// now invoke the function and pass in an argument

// ✅ Higher-Order Functions

// store a function inside of a variable

// pass a function as an argument

// functions are objects and can have properties

// ✅ Scopes

// Global Scope

// Function Scope

// -------------------------------------------

// console.log("------------------------");
// console.log("⬇️ Break Out Activites ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Defining, Declaring, and Invoking Functions

// ❗ Define a function that takes two numbers as arguments and returns their sum.

// Example: addNumbers(5, 5) ➞ 10

// ✨ BONUS: Try providing a default value for one of your arguments.

//     function addNumbers(a, b) {
//         return a + b
//     }
//    console.logaddNumbers(5, 5);

// ❗ Define a function that takes an integer "minutes" and converts it to seconds.

// Example: convert(6) ➞ 360

//         function convert(minutes) {
//             return minutes * 60
//    }

//    console.log(convert(6));

// ❗ Define a function that takes any number between 1 and 1000. Sum all the numbers
// from 1 to the number passed to the function. For instance, if the input is 5 then
// your function should return 15 because 1 + 2 + 3 + 4 + 5 = 15.

// Example: sumNumbers(5) ➞ 15

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// function sumNumbers(number) {
// let total = 0
// for (let i = 0; i <= number; i++) {
//         total = total + i
// }
// return total
// }

// console.log(sumNumbers(5));

// 🚧 Break Out Activity 2: Creating / Implementing Higher-Order Functions

//     ❗ Define a function, compareFunctions(), that will be passed two parameterless functions,
//     first and second. compareFunctions() should call each function and return a string indicating
//     which function returned the larger number.

//         If first() returns the larger number, return the string "First Function is Higher!".
//         If second() returns the larger number, return the string "Second Function is Higher!".
//         If the functions return the same number, return the string "Draw!".

//         Example: compareFunctions(() => 1, () => 10) ➞ "First Function is Higher!"
//         Example: compareFunctions(() => 10, () => 1) ➞ "Second Function is Higher!"
//         Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

//     🚨 Be sure to comment out any code above before proceeding.

//     compareFunctions(firstFunction, secondFunction) {
// let firstFunction = (number)
// let secondFunction = (number)

// if (firstFunction1 > secondFunction) {return "First Function is Higher!"}
// elseif (firstFunction1 < secondFunction) {return "Second Function is Higher!"}
// elseif (firstFunction1 > secondFunction) {return "Draw!"}

//     }

// function firstFunction() {
//   return 10;
// }
// function secondFunction() {
//   return 20;
// }

// const compareFunctions = (firstFunction, secondFunction) => {
// if (firstFunction > secondFunction) {
//     return "First Function is Higher!"
// }
// else if (secondFunction > firstFunction) {
//     return "Second Function is Higher!"
// } else if (firstFunction == secondFunction) {
//     return "Draw!"
// }
// };

// console.log(compareFunctions(firstFunction, secondFunction));



// 🚧 Break Out Activity 3: Advanced Functions

// ❗ Define a function that reverses all the words in a sentence beginning with a particular letter.

// 💡 Reverse the words themselves, not the entire sentence.

// 💡 All characters in any sentence should remain in lower case.

// Example: reverseWords("sally sells seashells by the sea shore", "s") ➞ "yllas slles sllehsaes by the aes erohs"




