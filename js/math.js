// //STEP 1
// // Prompt the user for a number
// let userInput = prompt("Enter a number:");
// // Convert the user input to a number
// let number = parseFloat(userInput);
// // Check if the input is a valid number
// if (!isNaN(number)) {
//   // Get the positive version of the number
//   let positiveNumber = Math.abs(number);
//   console.log("Result: " + positiveNumber);
// } else {
//   console.error("Invalid input.");
// }


//STEP 2
// let userInput = prompt("Enter a floating-point value:");
// // Convert the user input to a floating-point number
// let floatValue = parseFloat(userInput);
// // Check if the conversion was successful and the input is a valid number
// if (!isNaN(floatValue)) {
//   // Round up to the nearest whole number using Math.ceil
//   let roundedValue = Math.ceil(floatValue);
//   console.log(`Initial value: ${floatValue}`);
//   console.log(`Result: ${roundedValue}`);
// } else {
//   console.log("Invalid input.");
// }



//STEP 3
// let userInput = prompt("Enter a floating-point value:");
// // Convert the user input to a floating-point number
// let floatValue = parseFloat(userInput);
// // Check if the conversion was successful and the input is a valid number
// if (!isNaN(floatValue)) {
//   // Round up to the nearest whole number using Math.ceil
//   let roundedValue = Math.floor(floatValue);
//   console.log(`Initial value: ${floatValue}`);
//   console.log(`Result: ${roundedValue}`);
// } else {
//   console.log("Invalid input.");
// }



//STEP 4
// let userInput = prompt("Enter 5 numbers separated by commas (e.g., 1,2,3,4,5):");
// let numbersArray = userInput.split(',');
// // Convert the array of strings to an array of numbers
// let numbers = numbersArray.map(Number);
// // Check if the conversion was successful and the input is valid
// if (numbers.length === 5 && numbers.every(num => !isNaN(num))) {
//   // Find the largest and smallest numbers using Math.max and Math.min
//   let largestNumber = Math.max(...numbers);
//   let smallestNumber = Math.min(...numbers);
//   // Display the results in the console
//   console.log(`Entered numbers: ${numbers.join(', ')}`);
//   console.log(`Largest number: ${largestNumber}`);
//   console.log(`Smallest number: ${smallestNumber}`);
// } else {
//   console.log("Invalid input");
// }




// //STEP 5
// let userInput = prompt("Enter a number:");
// let inputNumber = parseFloat(userInput);
// if (!isNaN(inputNumber)) {
//   // Calculate the square root using Math.sqrt
//   let squareRootResult = Math.sqrt(inputNumber);
//   console.log(`Square root of ${inputNumber} is: ${squareRootResult}`);
// } else {
//   console.log("Invalid input.");
// }