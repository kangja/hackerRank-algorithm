/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  // Write your code here
  //   initialize count = 0
  let count = 0;
  n = 12;
  //   how to separatre numbers into one digit?
  let splitIntegers = n
    .toString()
    .split("")
    .map((i) => {
      return Number(i);
    });
  console.log(splitIntegers);
  //   [1, 0, 1, 2];

  //   divide n by all separated numbers like 1, 0, 1, 2
  // run for loop for splitIntegers
  for (let i = 0; i < splitIntegers.length; i++) {
    if (n % splitIntegers[i] === 0) {
      count = count + 1;
    }
  }

  //   return count;
  console.log(count);
  //   if n % each number === 0 {
  //   increase the count
  //      return  the count
  //   }
}

findDigits();
