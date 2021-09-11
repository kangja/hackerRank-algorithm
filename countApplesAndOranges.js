/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOranges = 0;

  //   [ 7, 8, 9, 10 ]

  let addedApple = apples.map((apple) => apple + a);
  //   console.log(addedApple);
  //   [6, 7, 0];

  let addedOrange = oranges.map((orange) => orange + b);
  //   console.log(addedOrange);
  //   [15, 10, 8];

  for (let i = 0; i <= addedApple.length; i++) {
    if (addedApple[i] >= s && addedApple[i] <= t) {
      countApples++;
    }
  }

  for (let i = 0; i <= addedOrange.length; i++) {
    if (addedOrange[i] >= s && addedOrange[i] <= t) {
      countOranges++;
    }
  }

  console.log(countApples);
  console.log(countOranges);

  //   console.log(countApples);
  //   console.log(countOranges);
}

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2, 3, -4];
let oranges = [3, -2, -4];

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));

// 2nd example
// s= 7
// t = 11

// a= 5
// b= 15
// -2, 2, 1
// 5, -6

// 3, 7, 6   1
// 20, 9     1
