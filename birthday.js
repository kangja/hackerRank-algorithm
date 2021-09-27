// * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY s
//  *  2. INTEGER d
//  *  3. INTEGER m
//  */

function birthday(s, d, m) {
  // Write your code here
  let count = 0;

  if (m === 1 && s[0] === d) {
    count = 1;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s.slice(i, m + i).reduce((a, b) => a + b) === d) {
        count++;
      }
    }
  }
  return count;
}

let s = [1, 2, 1, 3, 2];
let m = 2;
let d = 3;

console.log(birthday(s, d, m));

// let m = 2; //total of 2 squares
// let d = 3; //sum up to 3
// // output should be 2

// let s = [1, 1, 1, 1, 1, 1];
// let m = 2; // total of 2 squares
// let d = 3; //sum up to 3
// // output should be 0

// let s = [4];
// let m = 1; //total of 1 squre
// let d = 4; //sum up to
// // output should be 1
