/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let positiveSum = 0;

  let negativeSum = 0;

  let zeroSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeSum = negativeSum + 1;
    } else if (arr[i] > 0) {
      positiveSum = positiveSum + 1;
    } else if (arr[i] === 0) {
      zeroSum = zeroSum + 1;
    }
  }
  console.log((positiveSum / arr.length).toFixed(6));
  console.log((negativeSum / arr.length).toFixed(6));
  console.log((zeroSum / arr.length).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];
// let output = [0.5, 0.333333, 0.166667];

plusMinus(arr);
