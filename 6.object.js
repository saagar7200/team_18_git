//! object

// user  -> name , email , password , id
// let user_name = ''
// let user_email = ''

// let user = [1, "John", "john@gmail.com", "123456"];
// let user1 = [1, "John", "123456", "john@gmail.com"];

// let users = [
//   [1, "John", "john@gmail.com", "123456"],
//   [2, "John", "john@gmail.com", "123456"],
// ];

//! new keyword / object constructor
// const obj = new Object();

//* object literal
let user = {
  _id: 1,
  //   "full name": "John",
  name: "John",
  email: "john@gmail.com",
  password: "1254323456",
};

//* reading properties
//! dot notation
// const email = user.email;
// console.log(email); // email
// console.log(user._id);

//! bracket notation  -> []
// const password = user["password"]; //? -> user.password
// console.log(password);

//* adding new properties
//! dot notation
user.address = "kathmandu";
//! bracket notation
user["is_student"] = false;

//* modify property
// user.name = "John Doe";
user["email"] = "johndoe@gmail.com";

// console.log(user["full name"]);

let read_val = "password";
// console.log(user.read_val); //
console.log(user[read_val]); // user['password']

let add_val = "role";
const value = "USER";
// user[add_val] = "USER";
user[add_val] = value;

console.log(user);

//! es6

//? spread operator =>   ...
// arr/object
let u1 = {
  a: "a",
  b: "b",
};

let u2 = { ...u1, c: "c" };

u2.a = "abc";

// console.log(u1);
// console.log(u2);

//? destructuring
// let name = user.name;
// let email = user.email;
// let password = user.password;
// let { name, email, password } = user;
// console.log(name, email, password);

let { name: userName, email: userEmail } = user;
console.log(userName, userEmail);

//todo: rest operator -> ...

let { name, email, password, _id, role, address, is_student, ...x } = user;
console.log(name, email, password);
console.log(x);
