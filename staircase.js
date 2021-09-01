function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n - i - 1; j++) {
      string = string + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      string = string + "#";
    }
    console.log(string);
  }
}

// staircase(6);
staircase(3);

// 6
// Sample Output

// sssss#       =>  i = 0      (s=n-i-1)    # = (i+1)
// ssss##       =>  i = 1      (s=n-i-1)    # = (i+1)
// sss###       =>  i = 2      (s=n-i-1)    # = (i+1)
// ss####       =>  i = 3      (s=n-i-1)    # = (i+1)
// s#####       =>  i = 4      (s=n-i-1)    # = (i+1)
// ######       =>  i = 5      (s=n-i-1)    # = (i+1)

//      #
//     ##
//    ###
//   ####
//  #####
// ######
