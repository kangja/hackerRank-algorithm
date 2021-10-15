// /*
//  * Complete the 'climbingLeaderboard' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY ranked
//  *  2. INTEGER_ARRAY player
//  */

// function climbingLeaderboard(ranked, player) {
//   // Write your code here

//   //   *** let ranked = [100, 90, 90, 80];
//   //   let ranked = [100, 90, 90, 80];

//   // *** let player = [70, 80, 105];
//   //   let player = [70, 80, 105];

//   let rankForPlayers = [];

//   // run for loop?
//   // push only ONE number(70) from "player" array to the "ranked" array and sort the array in descending order and remove the duplicates.
//   for (let i = 0; i < player.length; i++) {
//     ranked.push(player[i]);
//     ranked.sort(function (a, b) {
//       return b - a;
//     });
//     // console.log("after it got pushed and sorted:", ranked);
//     let uniq = [...new Set(ranked)];
//     // console.log("unique:", uniq);

//     // find the index of  #70(player[i]) from "uniq" and push the (index of #70) + 1 to "rankForPlayers" array and find the index of number 70
//     // console.log(uniq.indexOf(player[i]) + 1);
//     rankForPlayers.push(uniq.indexOf(player[i]) + 1);
//     // console.log("rankForPlayers:", rankForPlayers);

//     // remove #70(player[i]) from "ranked" array by using splice
//     // console.log(ranked.indexOf(player[i]));
//     ranked.splice(ranked.indexOf(player[i]), 1);
//     // console.log("after deletion of the recently added number:", ranked);
//   }

//   return rankForPlayers;

//   // for score [70] =>  [100, 90, 90, 80, 70];
//   // rank = [1, 2, 2, 3, 4];
//   // push 4

//   // push only ONE number(80) from player array to the "ranked" array and sort the array in descending order. if there are matching numbers, consider that as one number(numbe 90 is an example.). find the index of number 80 and push the (index of 80) + 1 to "rankForPlayers" and remove 80 from "ranked" array.
//   // for score [80] =>  [100, 90, 90, 80, 80];
//   // push 3

//   // push only ONE number(105) from player array to the "ranked" array and sort the array in descending order. if there are matching numbers, consider that as one number(numbe 90 is an example.). find the index of number 105. push the index of 105 + 1 to "rankForPlayers" and remove 105 from "ranked" array.
//   // for score [105] =>  [105, 100, 90, 90, 80];
//   // push 1
// }

// climbingLeaderboard();

// // rankForPlayers = [4, 3, 1];

function climbingLeaderboard(ranked, player) {
  // get the unique ranks sorted descending
  ranked = Array.from(new Set(ranked));
  console.log("ranked:", ranked);

  const player_ranks = [];
  for (const individual of player) {
    while (ranked && individual >= ranked[ranked.length - 1]) ranked.pop();
    player_ranks.push(ranked.length + 1);
    console.log("player_ranks:", player_ranks);
  }

  return player_ranks;
}

ranked = [100, 100, 50, 40, 40, 20, 10];
player = [5, 25, 50, 120];
climbingLeaderboard(ranked, player);
