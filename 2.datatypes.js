//! data types

//primitive

//* number
let a = 10;
let b = 12.456;
//* string
// let c = 'asdfbjh'
let d = "hello world 2 + 2";

// `` -> template literal
// let e = `sdfjds
// sdfkdsj
// dsfkj`;

let user = "John";
let e = `hello ${2 + 2}`;

console.log("hello user");
console.log(`Hello ${user}`);

console.log(d);
console.log(e);

//* boolean
let f = true;
let g = false;

//* undefined
// let h = undefined;
let h;
console.log(h);

//* null
let i = null;
console.log(i);

//* bigint
console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
let j = 9007199254740991;

const big = BigInt(12);
console.log(big);
console.log(9007199254740991n + 2n); //
console.log(9007199254740991n + 3n); //
console.log(9007199254740991n + 4n); //
// console.log(12n + 1); //! TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(12n + 1n);

//* symbol
let id = Symbol("id");
let id1 = Symbol("id");
console.log(id);
console.log(id1);
console.log(id === id1);

// console.log(e.charAt(1));
// e[1] = "f";
// e = "hhh";
// console.log(e);
console.log(e.toUpperCase());
console.log("Hello".charCodeAt(0));
console.log("Hello".endsWith("o"));
console.log("Hello".endsWith("a"));
console.log("Hello".padStart(7, "0"));
console.log("Hello".toLocaleLowerCase());

//? undefined & not defined
let k;
console.log(k);
// console.log(l); //! ReferenceError: l is not defined

//
//? non primitive
//* object
//* array
//* function

//todo: operators
