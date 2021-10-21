// //total money Little Bobby has in the beginning.
// let n = 15;
// //the cost of a chocolate bar.
// let c = 3;
// //Little Bobby can turn in 2 wrappers to receive another bar.
// let m = 2;

// when he buys 5 bars, he now has n=0 because 5 bars * 3 = 15 and 15-15 = 0. So he now has 5 wrappers and he turns in 4 wrappers for 2 free chocolates since he only has 5 wrappers in total. Now has has 1 wrapper left because (5-4=1). Now, he has a total of 2 free chocolate and 1 wrapper. He eats 2 free chocolates, which gives him 2 wrappers and now he as a total of 3 wrappers because (2 + 1 = 3) and turns in 2 wrappers for 1 free chocolate. He now has a 1 left over wrapper and 1 free chocolate. He eats that 1 free chocolate and that leaves him with a total of 2 wrappers. Finally, he returns that 2 wrappers and get 1 chocolate.

// return the total/maximum number of chocolates
// 5 + 2 + 1 + 1

// function chocolateFeast(n, c, m) {
//   // first calculate the total number of chocolate bars that cost $c that Little Bobby could purchase with $n.
//   let totalChocolateBars = [];
//   totalChocolateBars.push(n / c);
//   console.log("totalChocolateBars:", totalChocolateBars);
//   //   5

//   //   the number of chocolate is the same as the number of wrappers.
//   let numberOfWrappers = totalChocolateBars;

//   //   calculate the number of wrappers Little Bobby has to turn in when he currently has a numberOfWrappers.
//   let turnedInWrapper = Math.floor(numberOfWrappers / m) * m;
//   console.log("turnedInWrapper:", turnedInWrapper);

//   //   calculate the number of leftOverWrapper.
//   let leftOverWrapper = numberOfWrappers - turnedInWrapper;
//   console.log("leftOverWrapper:", leftOverWrapper);

//   let numberOfFreeChocolatesFromTurningInWrapper = turnedInWrapper / m;
//   console.log(
//     "numberOfFreeChocolatesFromWrapper:",
//     numberOfFreeChocolatesFromTurningInWrapper
//   );

//   totalChocolateBars.push(numberOfFreeChocolatesFromTurningInWrapper);
//   console.log("totalChocolateBars:", totalChocolateBars);

//   numberOfFreeChocolatesFromWrapper is the same as the number of wrapper.
//   if (numberOfFreeChocolatesFromTurningInWrapper >= m) {
//     let;
//   }
// }

// chocolateFeast(n, c, m);

function chocolateFeast(n, c, m) {
  let count = 0;
  let value = Math.floor(n / c);
  //   console.log("value:", value);
  //   value: 5;

  while (true) {
    let focus = value + (count % m);
    console.log("focus:", focus);
    // focus: 5;
    // focus: 3;
    // focus: 2;
    // focus: 1;

    count = count + value;

    if (focus < m) break;

    value = Math.floor(focus / m);
  }

  return count;
}

//total money Little Bobby has in the beginning.
let n = 15;
//the cost of a chocolate bar.
let c = 3;
//Little Bobby can turn in 2 wrappers to receive another bar.
let m = 2;
console.log(chocolateFeast(n, c, m));
