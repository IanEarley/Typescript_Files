// var x : number = 0;
// while (x < 20) {
//   console.log(x);
//   x++;
// }
var players = [3, 10, 4, 5, 2];
console.log("for/in");
for (var player in players) {
    console.log(player);
}
console.log("for/of");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
//# sourceMappingURL=loops.js.map