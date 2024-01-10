// //STEP 1
// function getDaysInMonth(year, month) {
//     // Month is 0-based, so we subtract 1
//     let lastDay = new Date(year, month + 1, 0).getDate()
//     return lastDay
//   }
//   let year = 2024
//   let month = 1 // January is 0-based, so 1 represents February
//   let daysInMonth = getDaysInMonth(year, month)
//   console.log(`Number of days in ${getMonthName(month)} ${year}: ${daysInMonth}`)
  
//   function getMonthName(month) {
//     let monthNames = [
//       'January', 'February', 'March', 'April',
//       'May', 'June', 'July', 'August',
//       'September', 'October', 'November', 'December'
//     ]
//     return monthNames[month]
//   }


// //STEP 2
// let d = new Date("2024-01-10")
// let monthIndex = d.getMonth();
// // Array of month names
// let monthNames = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];
// // Get the month name from the array
// let monthName = monthNames[monthIndex];
// // Display the result in the console
// console.log("Month Name: " + monthName);



// //STEP 3
// function isWeekend(date) {
//     let dayOfWeek = date.getDay(date);
//     console.log(dayOfWeek)
//     // Check if the day is Saturday (6) or Sunday (0)
//     return dayOfWeek === 0 || dayOfWeek === 6
//   }
//   let specificDate = new Date('Jan 13, 2024')
//   // Check if the date is a weekend
//   let result = isWeekend(specificDate)
//   console.log(`Is the date a weekend? ${result}`)


// // //STEP 4
// function getYesterdayDayOfWeek() {
//     // Get the current date
//     let currentDate = new Date();
//     // Subtract one day (24 hours) from the current date
//     let yesterdayDate = new Date(currentDate);
//     yesterdayDate.setDate(currentDate.getDate() - 1);
//     // Get the day of the week for yesterday
//     let dayOfWeek = yesterdayDate.getDay();
//     // Array of day names
//     let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return dayNames[dayOfWeek];
//   }
//   let result = getYesterdayDayOfWeek();
//   console.log("Yesterday's day of the week: " + result);



// //STEP 5
// let currentDate = new Date();
// // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// let dayOfWeek = currentDate.getDay();
// // Array of day names
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // Get the first letter of the day name
// let firstLetterOfDay = dayNames[dayOfWeek].charAt(0);
// // Display the result in the console
// console.log("First letter of the day: " + firstLetterOfDay);
