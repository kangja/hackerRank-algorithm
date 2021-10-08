/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  // Write your code here

  //   create a new height array
  let height = [];

  //   run for loop.
  //   when            n = [0, 1, 2, 3];
  //   height should equal [1, 2, 3, 6];
  //   if n is an odd number, then height[i] equals to (height[n-1]) * 2
  //   if n is an even number, then height[n] equals to (height[n-1]) + 1;
  //     print height[i]
  for (let i = 1; i < n; i++) {
    let height = [];

    //   if n === 0, print 1.
    if (n === 0) {
      height[0] = 1;
      console.log(height[0]);
    } else if (n % 2 !== 0) {
      height[i] = height[i - 1] * 2;
      console.log(height[i]);
    } else if (n % 2 === 0) {
      height[i] = height[i - 1] + 1;
      console.log(height[i]);
    }
  }
}

// if n = 0, then height = 1
// if n = 1, then height = 2
// if n = 2, then height = 3
// if n = 3, then height = 6
// if n = 4, then height = 7
// if n = 5, then height = 14

utopianTree(1);
