// *
//  * Complete the 'hurdleRace' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER k
//  *  2. INTEGER_ARRAY height
//  */

function hurdleRace(k, height) {
  // Write your code here
  //   let height = [1, 2, 3, 3, 2];
  //   let k = 1;
  //   k = maximum height that Dan can jump
  // if k is greater than all the maximumValue from height array, then return 0. else return numberOfPotionsNeeded.

  //find the maximum value from the height value
  let maxValue = Math.max(...height);
  //   console.log(maxValue);

  if (k > maxValue) {
    return 0;
  } else {
    let numberOfPotionsNeeded = maxValue - k;
    return numberOfPotionsNeeded;
  }
}

let height = [1, 2, 3, 3, 2];
let k = 1;
console.log(hurdleRace(k, height));
