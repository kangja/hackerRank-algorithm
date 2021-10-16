function saveThePrisoner(n, m, s) {
    // (m-1 + s)%n = (2-1+2) % 5 = 3
return (m-1 + s) % n || n
}


// who will receive the awful taste candy?

// n = # of prisoners;
// m = # of candy;
// s = where the distribution starts at

// ************* example 
let n = 4;
let m = 6;
let s = 2;

(m-1 + s)%n = (6-1+2) % 4 = 3

prisoners =             1, 2, 3, 4,
distribution starts =      1, 2, 3
                        4, 5, 6.

index   =               [0,1,2];


m % n  = 
6 % 4 = 2

return 3
// ************* example
let n = 5;
let m = 2;
let s = 1;

(m-1 + s)%n = (2-1+1) % 5 = 2

prisoners =             1, 2, 3, 4, 5
distribution starts =   1, 2

return 2
// ************* example
let n = 5;
let m = 2;
let s = 2;

(m-1 + s)%n = (2-1+2) % 5 = 3


prisoners =             1, 2, 3, 4, 5
distribution starts =      1, 2

return 3
// ************* example
let n = 7;
let m = 19;
let s = 2;

prisoners =             1, 2, 3, 4, 5, 6, 7
distribution starts =      1, 2, 3, 4, 5, 6,
                        7, 8, 9, 10,11,12,13
                       14,15,16, 17,18,19


(m-1 + s)%n = (19-1+2) % 7 = 6


return 6
// ************* example
let n = 3;
let m = 7;
let s = 3;

prisoners =             1, 2, 3
distribution starts =         1
                        2, 3, 4
                        5, 6, 7

(m-1 + s)%n = (7-1+3) % 3 = 6 || 3


return 3