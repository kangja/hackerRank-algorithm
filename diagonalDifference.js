function diagonalDifference(arr) {
  let dimension = arr[0].length;
  //   console.log(arr[0]);
  //   console.log(`the length of dimension is ${dimension}`);

  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0, j = dimension - 1; i < dimension, j > -1; i++, j--) {
    leftDiagonalSum = leftDiagonalSum + arr[i][i];
    //leftDiagonalSum = leftDiagonalSum + arr[0][0];
    //leftDiagonalSum = 0 + 11

    //leftDiagonalSum = leftDiagonalSum + arr[1][1];
    //leftDiagonalSum = 11 + 5

    // leftDiagonalSum = leftDiagonalSum + arr[2][2];
    //leftDiagonalSum = 16 + 8
    //leftDiagonalSum = 24

    rightDiagonalSum = rightDiagonalSum + arr[i][j];
    //rightDiagonalSum = rightDiagonalSum + arr[0][2]
    //rightDiagonalSum = 0 + 4

    //rightDiagonalSum = rightDiagonalSum + arr[1][1]
    //rightDiagonalSum = 4 + 5

    //rightDiagonalSum = rightDiagonalSum + arr[2][0]
    //rightDiagonalSum = 9 + 10
    //19
  }

  let difference = leftDiagonalSum - rightDiagonalSum;
  return Math.abs(difference);
}

let arr = [
  [11, 2, 4],
  [4, 5, 5],
  [10, 0, 8],
];

console.log(diagonalDifference(arr));
