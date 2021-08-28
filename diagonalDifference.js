/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here

  let leftDiagonalSum = arr[0][0] + arr[1][1] + arr[2][2];
  //   console.log(leftDiagonalSum);

  let rightDiagonalSum = arr[0][2] + arr[1][1] + arr[2][0];
  //   console.log(rightDiagonalSum);

  let result = Math.abs(leftDiagonalSum - rightDiagonalSum);
  return result;
}

let arr = [
  [11, 2, 4],
  [4, 5, 5],
  [10, 0, 8],
];

console.log(diagonalDifference(arr));
