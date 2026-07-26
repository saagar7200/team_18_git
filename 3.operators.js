//! operators

//* arithmetic
//? + , - , * , / , % , **
// console.log(10 + 2);
let a = 30;
let b = 3;
// console.log(a - b);
let sum = a + b;
// console.log(sum);
// console.log(a * b);
// console.log(a / b); // 10
// console.log(a % b);  // 0
// console.log(2 ** 3);

console.log("hello" + " " + "world");

//* assignment
// = , += , -= , /= *= , %=
let c = 10;
let d = 23;
c += 20; //c = c + 20;

c += d; //c = c + d;

//* comparison
//? == , === , < ,<= , > , >= , != ,!==
// return boolean

let e = 10;
let f = "10";
// console.log(e == f); //true
// console.log(e === f); // false
// console.log(e != f); // false
// console.log(e !== f); // true
// console.log(e < f); // false
// console.log(e <= f); // true
// console.log(e > f); // false
// console.log(e >= f); // true

//* logical
// AND && , OR || , NOT !
// return boolean
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// // OR
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// //NOT
// console.log(!true);
// console.log(!false);

//! unary op
//? increment -> ++  & decrement -> --
//* pre & post
let count = 1;
// console.log(count); // 1 // post
// console.log(count++); // 1 // pre
// console.log(count); // 2
// console.log(++count); //3

//* ternary op.
// condition ? exp_1 : exp_2
let age = 16;
// age >= 18 ? console.log("Can vote") : console.log("can not vote");
const res = age >= 18 ? "Can vote" : "can not vote";

// console.log(res);

//* typeof
// console.log(typeof res);
// console.log(typeof "");
// console.log(typeof 12);
// console.log(typeof count);
// console.log(typeof count === "number");

//! null coalescing / null safety  -> ??

let user = "John";
// let user;
// console.log(user ?? "Guest");

//

//* type conversion
//? explicit
console.log(Boolean(12));
console.log(String(12));
console.log(Number("12"));
console.log(Number("abc")); // NaN

//? Implicit
//* type coercing
console.log(10 + "2");
console.log(10 - "2");
console.log(10 - "a");

//todo:  truthy & falsy value
// falsy values : 0 , -0 , null , undefined , '' , false , NaN
// truthy values:

// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(" ")); // true
// console.log(Boolean(NaN));

// let x = 0;

// if (!x) {
//   console.log("run");
// }
