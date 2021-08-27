function compareTriplets(a, b) {
  // Write your code here
  let resultArray = [0, 0];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] > b[j]) {
        resultArray[0] = resultArray[0] + 1;
      } else if (b[j] > a[i]) {
        resultArray[1] = resultArray[1] + 1;
      }
    }
  }

  return resultArray;
}

let a = [1, 2, 3];
let b = [3, 2, 7];
console.log(compareTriplets(a, b));
