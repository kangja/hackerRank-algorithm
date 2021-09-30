/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer() {
  // Write your code here

  //   initialize alphabets
  let alphabets = [];
  let start = "a".charCodeAt(0);
  let last = "z".charCodeAt(0);
  for (let i = start; i <= last; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  //   initialize emptyArray
  //   let emptyArray =

  let h = [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ];

  // //   how to attach numbers to alphabet?
  //   h = [a:1, b:3, c:1, d: 3 ... etc ]
  let output = h.map(function (obj, index) {
    let myobj = {};
    myobj[alphabets[index]] = obj;
    return myobj;
  });

  console.log(output);

  //   split words by each letter
  let splitAlphabet = [];
  let word = "zara";
  let splitWord = word.split("");
  console.log(splitWord);

  //   find the  value/number of [z, a, r, a ] from emptyArray. if there are matching keys from the array, return the values
  //   it should return [7, 1, 5, 1]

  let values = splitWord.map((k) => output[k]);
  console.log(values);

  // use the largest number and multiply that by the length of the given word and return the value.
}

// let h = 1;
// let h = [
//   1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
// ];
// let word = "zaba";
designerPdfViewer();

// let word = zaba;
