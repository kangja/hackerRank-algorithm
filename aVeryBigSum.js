function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

let ar = [1, 1, 1, 1, 1];
console.log(aVeryBigSum(ar));
