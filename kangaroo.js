function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let complete = false;
  for (let i = 1; i <= 10000; i++) {
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 === x2) {
      complete = true;
      break;
    }
  }

  return complete ? "YES" : "NO";
}

// x1 = starting location of the "1st" kangaroo

// x2 - starting location of the "2nd" kangaroo

// find the same location at the same time. If it's possible, return YES, otherwise return no.

// example
x1 = 0;
v1 = 2;

x2 = 5;
v2 = 3;

console.log(kangaroo(x1, v1, x2, v2));

// 2;

// 0 + (2 * (1,2,3,4,5,5) =
