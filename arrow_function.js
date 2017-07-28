var completeName = function (first, last) {
    return first + " " + last;
};
console.log(completeName('Joe', 'Bob'));
var gradesGenerator = function (grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradesGenerator(100));
console.log(gradesGenerator(56));
console.log(gradesGenerator(75));
//# sourceMappingURL=arrow_function.js.map