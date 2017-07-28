// var x : number = 0;

// while (x < 20) {
//   console.log(x);
//   x++;
// }

let players : number[] = [3, 10, 4, 5, 2];

console.log("for/in");
for (let player in players) {
  console.log(player);
}

console.log("for/of");
for (let player of players) {
  console.log(player);
}