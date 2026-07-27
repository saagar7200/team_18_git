//! scope
// accessibility or visibility of variable & function declaration

//* global scope
var global_var = "global var";
let global_let = "global let";
const global_const = "global const";

console.log(global_var);
//* block scope
// {}
if (true) {
  var block_var = "block var";
  let block_let = "block let";
  const block_const = "block const";
  console.log("-----block----");
  //   console.log(global_let);
  //   console.log(global_const);
  console.log(block_let);
}

// console.log("global", block_const);

//* function scope
// function scope() {
//   var function_var = "function var";
//   let function_let = "function let";
//   const function_const = "function const";
//   console.log("-----function----");
//   //   console.log(global_let);
//   //   console.log(global_const);
//   //   console.log(block_let);
//   //   console.log(block_const);

//   console.log(function_const, function_let, function_var);
// }

// console.log(function_var);

// scope();

//* lexical scope
// function outer() {
//   let x = "outer";
//   console.log(x);
//   function inner() {
//     let y = "inner";
//     console.log(x); //
//     console.log(y);
//   }
//   inner();
// }
// outer();

//* scope chain

// let x = 12;
// function scope() {
//   //   let x = 45;
//   console.log(x);
// }
// scope();

// let x = 12;

// function outer() {
//   console.log(x); //
//   function inner() {
//     let x = "outer";

//     console.log(x); //
//   }
//   inner();
// }
// outer();

let x = "outer";

if (true) {
  let x = 34;

  let y = 10;
  console.log(y); // 10
  if (true) {
    // let x = 344;
    console.log(x); // 34
    x = 100;
    console.log(x); // 100
  }
  console.log(x); // 100
}
// console.log(x); //

//* module scope

//! hoisting

//todo: callstack ,  execution context -> [memory creation phase , execution phase]
// memory creation phase
//? memory allocation
// { x:undefined ,y:undefined ,a:(){}}

// execution phase
// { x:40 ,y:56 ,a:(){}}

//? code execution
//? variable initialization

var x = 40;

console.log(x); //40

var y = 56;

function a() {
  console.log("a");
  function b() {
    console.log("b");
    function c() {
      console.log("c");
    }
    c();
  }
  b();
}

a();
a();
// a();

//callstack
