/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  // Write your code here
  //   initial height always starts at 1. and then multiply by 2 and then add 1 and this pattern repeats.

  //   how to create an array from 0 - given number
  let allNumber = [...Array(n + 1).keys()];
  console.log(allNumber);
  //   [0, 1, 2, 3, 4];

  if (n === 0) {
    console.log(1);
  }

  // inside the for loop,
  // if n is an odd number, multiply the previous number by 2 and return the number;
  // if n is an even number, add 1 to the previous number

  for (let i = 1; i <= allNumber.length; i++) {
    if (n[i] % 2 === 1) {
      let output = n[i - 1] * 2;
      console.log(output);
    }
    if (n[i] % 2 === 0) {
      let output = n[i - 1] + 1;
      console.log(output);
    }
  }
}

// output should be
// 1
// 2
// 7

// let n = 0;
// let n = 1;
// let n = 4;

utopianTree(n);
