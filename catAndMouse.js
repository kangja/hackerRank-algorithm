// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  //   let x = 1;
  //   let y = 2;
  //   let z = 3;

  //   initialize a variable for distanceFromCatA
  //   distance from Mouse C to Cat A: |z-x|
  let distanceFromCatA = Math.abs(z - x);
  console.log(distanceFromCatA);

  //   initialize a variable for distanceFromCatB
  //   distance from Mouse C to Cat B: |z-y|
  let distanceFromCatB = Math.abs(z - y);
  console.log(distanceFromCatB);

  //   if distanceFromCatA > distanceFromCatB, then return Cat B
  if (distanceFromCatA > distanceFromCatB) {
    console.log("Cat B");
  }
  //   if distanceFromCatB > distanceFromCatA, then return Cat A
  if (distanceFromCatB > distanceFromCatA) {
    console.log("Cat A");
  }
  //   if distanceFromCatB = distanceFromCatA, then return Mouse C
  if (distanceFromCatA === distanceFromCatB) {
    console.log("Mouse C");
  }
}

// output should be Cat B
let x = 1;
let y = 3;
let z = 2;

catAndMouse(x, y, z);
