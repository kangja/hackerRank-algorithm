/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Write your code here

  let highestNumber = scores[0];
  let lowestNumber = scores[0];
  let highestNumberCount = 0;
  let lowestNUmbewrCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestNumber) {
      highestNumber = scores[i];
      highestNumberCount++;
    } else if (scores[i] < lowestNumber) {
      lowestNumber = scores[i];
      lowestNUmbewrCount++;
    }
  }

  console.log(highestNumberCount, lowestNUmbewrCount);
  //   console.log(lowestNUmbewrCount);
  //   console.log(`highest number is ${highestNumber}`);
  //   console.log(`lowest number is ${lowestNumber}`);
}

scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// scores = [3, 2, 21];
breakingRecords(scores);
