// this  -> object

// this  ->  module.exports   => {}
// module.exports.name = "john";
// this  ->  module.exports   => {name}

//  module.exports   =  {age:}

// module.exports = {
//   age: 13,
// };

// module.exports.email = 24;

// console.log(this);

//*

function a() {
  console.log(this); // global object
}

// a();

// let user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   getName() {
//     console.log(this.name); // user.name
//   },
// };

// user.getName(); //

//* arrow function
// let user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   getName: () => {
//     console.log(this);
//   },
// };

// user.getName(); //!

// let user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   getName() {
//     const a = () => {
//       console.log(this.name);
//     };
//     a();
//   },
// };

// user.getName(); //!

//! loosing context
let user = {
  name: "John Doe",
  email: "john@gmail.com",
  getName() {
    console.log(this); // user.name
  },
};
// user.getName();//
// const fn = user.getName;
// fn(); //

//*class

class User {
  name;
  email;
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    console.log(this.email);
  }
}

// const u = new User("Ram", "ram@gmail.com");
// const u1 = new User("john", "john@gmail.com");
// new   => {}   <- this
// this.name   => {name}
// this.email   => {name , email}
// return this  => u

// console.log(u);

// u.getEmail(); //
// u1.getEmail(); //

//! function object
// function add(a, b) {
//   console.log(a + b);
// }

// add.age = 24;

// console.log(add.name); //
// console.log(add.age); //
// add(12, 3);

// const u = new User("Ram", "ram@gmail.com");
// const u1 = new User("john", "john@gmail.com");

function introduce(age, address) {
  //   console.log(this);
  console.log("i am ", this.name, age, address);
}

//! call , apply , bind

introduce.call(u, 12, "kathmandu"); //
introduce.apply(u1, [34, "kathmandu"]); //
const fn = introduce.bind(u1, 40, "kathmandu"); //

fn();
