function compareTriplets(a, b) {
  let resultArray = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      resultArray[0] = resultArray[0] + 1;
    } else if (b[i] > a[i]) {
      resultArray[1] = resultArray[1] + 1;
    }
  }

  return resultArray;
}

// let a = [1, 2, 3];
// let b = [3, 2, 7];
// console.log(compareTriplets(a, b));

// let a = [5, 6, 7];
// let b = [3, 6, 10];
// console.log(compareTriplets(a, b));

let a = [17, 28, 30];
let b = [99, 16, 8];
console.log(compareTriplets(a, b));
