//* hoisting
//? js behavior where  declarations are processed before code execution.
//? js behavior where  declarations are moved to top of  their scope.

//{x:12 greet:(){}}

// var x;

// console.log(x); //undefined

// var x = 12;

// console.log(x); //12

// greet(); // hello

// function greet() {
//   console.log("hello");
// }

// greet(); // hello

// console.log(z); //! ReferenceError: Cannot access 'z' before initialization

let z;

//* TDZ  -> temporal dead zone
//? period between declaration entering in scope & execution for declaration of let or const

// a();

//* function expression
let a = function () {
  console.log("a");
};
