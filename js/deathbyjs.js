// //STEP 1
// function sortAlphabetically(inputString) {
//     // Remove non-alphabetic characters
//     let cleanedString = inputString.replace(/[^a-zA-Z]/g, '');
//     // Convert the string to an array of characters, sort it, and join it back into a string
//     let result = cleanedString.split('').sort().join('');
//     return result;
//   }
//   let originalString = 'webmaster';
//   let result = sortAlphabetically(originalString);
//   console.log(`Original string: ${originalString}`);
//   console.log(`Result: ${result}`);



// //STEP 2
// function capitalizeFirstLetterOfEachWord(inputString) {
//     // Split the string into an array of words
//     let words = inputString.split(' ');
//     // Capitalize the first letter of each word
//     let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     // Join the words back into a string
//     let result = capitalizedWords.join(' ');
//     return result;
//   }
//   let originalString = 'the quick brown fox';
//   let result = capitalizeFirstLetterOfEachWord(originalString);
//   console.log(`Original string: ${originalString}`);
//   console.log(`Result: ${result}`);



//STEP 3
// function countVowels(inputString) {
//     // Define a regular expression to match vowels (case-insensitive)
//     let vowelRegex = (/[aeiou]/gi)
//     // Use match to find all occurrences of vowels in the string and count the length
//     let vowelCount = (inputString.match(vowelRegex) || []).length;
//     return vowelCount;
//   }
//   let originalString = 'The quick brown fox';
//   let result = countVowels(originalString);
//   console.log(`Original string: ${originalString}`);
//   console.log(`Result: ${result}`);



// //STEP 4
// function generateRandomId(length) {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let randomId = '';
//     for (let i = 0; i < length; i++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       randomId += characters.charAt(randomIndex);
//     }
//     return randomId;
//   }
//   let lengthOfId = 8;
//   let result = generateRandomId(lengthOfId);
//   console.log(`Random ID (${lengthOfId} characters) is: ${result}`);




// //STEP 5
// function Longest_Country_Name(countryNames) {
//     let longestName = '';
//     for (let country of countryNames) {
//       if (country.length > longestName.length) {
//         longestName = country;
//       }
//     }
//     return longestName;
//   }
//   let countryList = ["Australia", "India", "United States of America", "Canada"];
//   let result = Longest_Country_Name(countryList);
//   console.log(`List of countries: ${countryList}`);
//   console.log(`Longest country name: ${result}`);