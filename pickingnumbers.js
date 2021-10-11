// between two numbers is <= 1

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here

  return a
    .reduce((count, value) => {
      count[value]++;
      return count;
    }, new Array(100).fill(0))
    .reduce((max, value, index, count) => {
      if (max < value + count[index + 1]) {
        max = value + count[index + 1];
      }
      return max;
    }, 0);
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
