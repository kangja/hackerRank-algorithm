function maxDifference(px) {
  // Write your code here

  // initialize empty array that will contain all the difference.
  let differenceArray = [];

  // let px = [7, 1, 2, 5]

  // loop through px
  for (let i = 0; i < px.length; i++) {
    if (px[i + 1] > px[i]) {
      // p[1] > p[0]
      // p[2] > px[1]
      let difference = px[i + 1] - px[i];
      differenceArray.push(difference);
    }
  }
  console.log(differenceArray);
}

let px = [7, 1, 2, 5];
maxDifference(px);
