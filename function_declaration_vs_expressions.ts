console.log(allName('Chris', 'Treager'));
// console.log(otherAllName('Lesley', 'Knope'));
// console.log(thirdAllName('Ann', 'Perkens'));

//function declaration, hoisting: Javascript looks for a declared function whenever a function is called

function allName(first : string, last : string) : string {
  return first + " " + last;
}

//function expression, must be defined before it is called

var otherAllName : (first : string, last : string) => string;

otherAllName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdAllName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}