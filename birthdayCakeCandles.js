// * Complete the 'birthdayCakeCandles' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY candles as parameter.
//  */

// 1st solution
// function birthdayCakeCandles(candles) {
//   // Write your code here
//   let sum = 0;
//   let biggestNumber = Math.max(...candles);
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === biggestNumber) {
//       sum = sum + 1;
//     }
//   }

//   return sum;

//   //   find the maximum number from the candles array
//   // if the biggest number equals candles array, add +1 to the sum.
//   // return the sum
// }

// 2nd solution
function birthdayCakeCandles(candles) {
  let biggestNumber = Math.max(...candles);
  return candles.filter((tallestCandle) => biggestNumber === tallestCandle)
    .length;
}

candles = [3, 2, 1, 3];

console.log(birthdayCakeCandles(candles));
// output = 2;
//
