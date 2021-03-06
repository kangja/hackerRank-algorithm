// all games are sold at the same price, "p" dollars.

// the first game will cost "p" dollars and every subsequent game will cost "d" dollars less than the previous one.

// ^above pattern continues until the "cost" becomes less than or equal to "m" dollars. And after that, every game will cost "m" dollars.

// when the "current price" <= "m", then start using "m" as a current price.

// how many games can you buy during the sale?

// ************* example 1
// p = 20 (price of the first game)
// d = 3 (discount)
// m = 6 (minimum cost of a game)
// s = 70 (starting budget)
//  8 <= m?
// 20, 17, 14, 11, 8, 8-3=5(it should be 5, but since the current price(5) <= m (5 <= 6),  )
// console.log(20 + 17 + 14 + 11 + 8);
// 70;

// you can buy 5 games (20, 17, 14, 11, 8)

// s >= (20 + 17 + 14 + 11 + 8)

// ************* example 2
// p = 20 (price of the first game)
// d = 3 (discount)
// m = 6 (minimum cost of a game)
// s = 80 (starting budget)

// 20, 17, 14, 11, 8, 6,  is 5 <=6, yes so "6" becomes a new price.
// console.log(20 + 17 + 14 + 11 + 8 + 6);
// 76;

// ************* example 3
// p = 20 (price of the first game)
// d = 3 (discount)
// m = 6 (minimum cost of a game)
// s = 85 (starting budget)
// 20, 17, 14, 11, 8, 6,  is 5 <=6, yes so "6" becomes a new price.
// console.log(20 + 17 + 14 + 11 + 8 + 6 + 6);
// 82
// return 7;

function howManyGames(p, d, m, s) {
  let i = 0;
  while (s >= 0) {
    p = p > m ? p : m;
    s = s - p;
    if (p - d < m) {
      p = m;
    } else {
      p = p - d;
    }
    i++;
  }
  return i - 1;
}

let p = 20;
let d = 3;
let m = 6;
let s = 70;

console.log(howManyGames(p, d, m, s));
// ************* example 1
// p = 20 (price of the first game)
// d = 3 (discount)
// m = 6 (minimum cost of a game)
// s = 70 (starting budget)
// 8 <= m?
// 20, 17, 14, 11, 8, 8-3=5(it should be 5, but since the current price(5) <= m (5 <= 6), starting at that position, start using "m" as value.  )
// console.log(20 + 17 + 14 + 11 + 8);
// 70;

// you can buy 5 games (20, 17, 14, 11, 8)
