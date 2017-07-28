console.log(allName('Chris', 'Treager'));
// console.log(otherAllName('Lesley', 'Knope'));
// console.log(thirdAllName('Ann', 'Perkens'));
//function declaration, hoisting: Javascript looks for a declared function whenever a function is called
function allName(first, last) {
    return first + " " + last;
}
//function expression, must be defined before it is called
var otherAllName;
otherAllName = function (first, last) {
    return first + " " + last;
};
var thirdAllName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=function_declaration_vs_expressions.js.map