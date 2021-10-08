/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

// function utopianTree(n) {
//   // Write your code here

//   let height = 1;

//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       height = height * 2;
//     } else {
//       height = height + 1;
//     }
//   }

//   console.log(height);
// }

// // if n = 0, then height = 1
// // if n = 1, then height = 2
// // if n = 2, then height = 3
// // if n = 3, then height = 6
// // if n = 4, then height = 7
// // if n = 5, then height = 14

// 2nd solution
function utopianTree(n) {
  let cycle = 1;
  let height = 1;

  while (cycle <= n) {
    if (cycle % 2 !== 0) {
      height = height * 2;
      //   height *= 2;
    } else {
      height++;
    }
    cycle++;
  }

  return height;
}

console.log(utopianTree(5));
