// //STEP 1
// // Prompt the user for their name
// let name = prompt("Enter your name:");
// // Find the length of the name
// let result = name.length;
// // Display the result using an alert
// alert("The length of your name is: " + result);



// //STEP 2
// // Prompt the user for their name
// let userName = prompt("Enter your name:");
// // Prompt the user for a numeric value
// let numericValue = prompt("Enter a numeric value:");
// // Convert the numeric value to an integer
// let index = parseInt(numericValue);
// // Check if the index is a valid number
// if (!isNaN(index) && index >= 0 && index < userName.length) {
//   // Find the letter at the specified index
//   let letter = userName.charAt(index);
//   // Display the result using an alert
//   alert(`The letter at index ${index} in your name is: ${letter}`);
// } else {
//   // Display an alert for an invalid input
//   alert("Invalid input. Please enter a valid number");
// }


// //STEP 3
// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your last name:")
// let fullName = "Your name is: " + firstName + " " + lastName
// // Display the result using an alert
// alert(fullName)


// //STEP 4
// let findIndex = "The quick brown fox jumps over the lazy dog";
// // Find the index of the word "fox"
// let indexOfFox = findIndex.indexOf("fox");
// // Display the result using an alert
// alert("The index of 'fox' is: " + indexOfFox);



// //STEP 5
// let findIndex = "The quick brown fox jumps over the lazy fox";
// // Find the index of the last instance of the word "fox"
// let lastIndexOfFox = findIndex.lastIndexOf("fox");
// // Display the result using an alert
// alert("The last index of 'fox' is: " + lastIndexOfFox);


// //STEP 6
// let initialText = "The quick brown fox jumped over the lazy dog";
// // Prompt the user for their full name
// let name = prompt("Enter your full name:");
// // Replace the specified text with the user's name
// let result = initialText.replace("the lazy dog", name);
// // Display the result using an alert
// alert("Result: " + result);



// //STEP 7
// // Store the initial text in a variable
// let initialText = "The quick brown fox jumps over the lazy dog";
// // Prompt the user for a word
// let searchWord = prompt("Enter a word to search for:");
// // Search for the user's word within the text
// let wordIndex = initialText.indexOf(searchWord);
// // Display the result using an alert
// if (wordIndex !== -1) {
//   alert(`The word "${searchWord}" was found at index: ${wordIndex}`);
// } else {
//   alert(`The word "${searchWord}" was not found in the text`);
// }



// //STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.substring(old_string.indexOf("the lazy dog"));

// // Display the uppercase result of new_string using an alert
// alert(new_string.toUpperCase());



// //STEP 9
// // Store the text with added spaces in a variable
// let originalText = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// // Trim leading and trailing spaces, and convert to lowercase
// let trimmedText = originalText.trim().toLowerCase();
// // Display the lowercase result using an alert
// alert("Result: " + trimmedText);



// //STEP 10
// // Store the text in a variable
// let initialText = "the quick brown fox jumps over the lazy dog";
// // Capitalize the first letter
// let capitalizedText = initialText.charAt(0).toUpperCase() + initialText.slice(1);
// // Display the result using an alert
// alert("Result: " + capitalizedText);