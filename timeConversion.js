/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  if (s.includes("PM") && s.substring(0, 2) === "12") {
    return s.substring(0, 8);
  }
  if (s.includes("AM") && s.substring(0, 2) === "12") {
    return "00" + s.substring(2, 8);
  }
  if (s.includes("PM")) {
    let firstTwoNumbers = s.substring(0, 2);
    let addedNumber = +firstTwoNumbers + 12;
    return addedNumber + s.substring(2, 8);
  }
}

// let s = "12:01:00PM";
// let s = "07:05:45PM";
let s = "12:01:00AM";
console.log(timeConversion(s));

// input 12:01:00PM
// return '12:01:00'

// input 12:01:00AM
// return '00:01:00'

// input 07:05:45PM
// return 19:95:45
