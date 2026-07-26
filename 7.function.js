//! function
// reusable block of code   => {}
// task

//

// let x = 23;

//* function declaration
//syntax
function function_name() {
  // function body
  // block
}

//function call / invoke
function_name();

//! declaration
// function greet() {
//   console.log("Hello World");
// }

// greet(); // Ram
// greet(); // John
// greet(); //
// greet(); //

//! function with input
// parameter & argument

// function greet(name) {
//   console.log("Hello ", name);
// }

// greet("Ram"); //
// greet("John");
// greet() //! Hello  undefined

// let x;
// console.log(x);
//! default parameter
// function greet(name = "Guest") {
//   //*   var name;
//   console.log("Hello ", name);
// }

// greet("Ram"); //
// greet("John");
// greet(); //! Hello  Guest

// x -> f(x) => .op

//! function with return type
// function greet(name = "Guest") {
//   //   console.log("Hello ", name);
//   const message = `Hello ${name}`;

//   return message; //
//   //   console.log("hello"); //? unreachable code
// }

// const x = greet("Ram"); //
// console.log(x);
// const y = greet("John");
// console.log(y);
// greet(); //! Hello  Guest

function greet(name = "Guest", age) {
  //   console.log("Hello ", name);
  const message = `Hello, I'm ${name}. I'm ${age}.`;

  return message; //
  //   console.log("hello"); //? unreachable code
}

// const res = greet("John", 28);
// console.log(res);
// console.log(greet("Ram", 30));
// console.log(greet(30, "Alice")); //

//! add()  return sum
//! sub
//!

//* function expression
// let const var
// const add = function (a, b) {
//   let sum = a + b;
//   return a + b;
// };

//
// console.log(add(12, 6));

//* arrow function
const add = (a = 0, b = 0) => {
  return a + b;
};

// const add = (a = 0, b = 0) => a + b;

// // division
// const div = (a = 1, b = 1) => {
//   return a / b;
// };

console.log(add(23, 6));

// function object

// function add(a, b) {
//   console.log(a + b);
// }

// add.value = "abc";
// console.log(add.value);

//* callback function
function parent(callback) {
  console.log(callback);
  console.log("parent");
  const square = callback(100);
  console.log("square", square);
}

function child(num = 0) {
  console.log("child", num * num);
  return num * num;
}

// parent(child);
// parent(child());
// parent(child);

// parent(function (num) {
//   return num * num;
// });

// parent((num) => num * num);

//* higher order function
// hof

const outer = () => {
  console.log("outer");
  const inner = () => {
    console.log("inner");
  };
  return inner;
};

const a = outer(); //
console.log(a);
a();

//* IIFE -> immediately invoked function expression
//* Generator function

//
//* recursive function
