//functions like a set of rules for your objects in a program

interface User {
  email : string;
  firstName? : string;
  lastName? : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.email}.`;
}

var realUser = {
  email: 'test@test.com',
};

console.log(profile(realUser));