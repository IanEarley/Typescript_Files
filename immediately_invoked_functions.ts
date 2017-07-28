var names :string[] = ["Ian", "Tyson", "Gordon"];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})()

console.log(counter);