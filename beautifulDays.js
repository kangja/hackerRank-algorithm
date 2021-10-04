/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  // Write your code here
  //   let i = 20;
  //   let j = 23;
  //   let k = 6;

  let output = [];

  for (let start = i; start <= j; start++) {
    // convert each number in the range to a string. We do that by concatenating the number to an empty string.
    // let numString = start + "";

    // console.log(numString);
    // 20;
    // 21;
    // 22;
    // 23;

    let reversed = start.toString().split("").reverse().join("");
    // console.log(reversed);

    if (Math.abs(start - reversed) % k === 0) {
      output.push(start);
    }
  }

  return output.length;
}

let i = 20;
let j = 23;
let k = 6;
console.log(beautifulDays(i, j, k));
