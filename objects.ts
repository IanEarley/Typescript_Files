// The ability to incapsulate both attributes and functions within a single item

// API's
var realUser = {
  email: 'test@test.com',
  firstName: 'Ian',
  lastName: 'Earley',
  sayHi() {
    return "Hey there";
  }
};

console.log(realUser.email);
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.sayHi());