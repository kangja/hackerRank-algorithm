/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// 1st solution
// function miniMaxSum(arr) {
//   // Write your code here
//   let emptyArray = [];
//   let sum1 = arr[1] + arr[2] + arr[3] + arr[4];
//   let sum2 = arr[0] + arr[2] + arr[3] + arr[4];
//   let sum3 = arr[0] + arr[1] + arr[3] + arr[4];
//   let sum4 = arr[0] + arr[1] + arr[2] + arr[4];
//   let sum5 = arr[0] + arr[1] + arr[2] + arr[3];

//   emptyArray.push(sum1, sum2, sum3, sum4, sum5);
//   let biggestNumber = Math.max(...emptyArray);
//   let smallestNumber = Math.min(...emptyArray);
//   console.log(`${smallestNumber} ${biggestNumber}`);
// }
// //   find the sum of every 4 numbers and push it to the array
// // return the largest and smallest number from the array

// arr = [1, 2, 3, 4, 5];
// miniMaxSum(arr);
// output = 10 14

// sum without [0] 2+3+4+5
// sum without [1]
// sum without [2]
// sum without [3]
// sum without [4]

// 2nd solution
function miniMaxSum(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum + " " + maxSum);
}

arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
