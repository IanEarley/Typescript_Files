// function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName("Lothar", "Hillpeple"));

//Immediately Invoked version
(function(first : string, last : string) {
  console.log(first + " " + last);
})("Inan", "Penderfell");

(function() {
  for (let name in names) {
    counter++;
  })();