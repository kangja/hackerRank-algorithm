/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  // Write your code here

  //   initialize alphabets
  let alphabets = [];
  let start = "a".charCodeAt(0);
  let last = "z".charCodeAt(0);
  for (let i = start; i <= last; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  // //   how to attach numbers to alphabet?
  //   h = [a:1, b:3, c:1, d: 3 ... etc ]
  let output = h.map(function (obj, index) {
    let myobj = {};
    myobj[alphabets[index]] = obj;
    return myobj;
  });

  //   split words by each letter
  //   let word = "zara";
  let splitWord = word.split("");

  // if there are matching keys from the array, return the values
  //   it should return [7, 1, 5, 1]
  let filtered = output.filter((item) =>
    splitWord.includes(Object.keys(item)[0])
  );

  //   how to return an array of objects' value only.
  let numbersOnly = filtered.reduce(
    (acc, obj) => [...acc, Object.values(obj).map((y) => y)],
    []
  );

  // find the largest number from the array
  let largestNumber = Math.max(...numbersOnly);

  //  multiply the largest number with the word.length
  let finalResult = largestNumber * word.length;
  //   console.log(finalResult);
  return finalResult;
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
let word = "zaba";
console.log(designerPdfViewer(h, word));

// let word = zaba;
