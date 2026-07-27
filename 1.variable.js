//? dynamic typed , interpreted & single threaded language
// web page  ->  browser js engine [v8 engine , spiderMonkey]
// server  -> nodejs

// console -> dev tool
// console.log("Hello world");
// console.log("Hello world");
console.log("Hello world");

console.log(20 + 3);

//* variable declaration methods
//? var , let , const

var a = 10; // {a:10}

// console.log(a); //  10

a = 300; //? reassignment {a:300}
console.log("a"); // a
console.log(a); //  300

var a = "hello"; //? redeclaration

console.log(a);

a = 34;

let b = 20; // {b:20}

b = "string";

console.log(b); // 20

b = 500;
console.log(b); // 500

// let b = "b"; //! SyntaxError: Identifier 'b' has already been declared
console.log(b);

const c = 23; // {c:23}

console.log(c);

// c = 34; //! TypeError: Assignment to constant variable.

// const c = "c"; //! SyntaxError: Identifier 'c' has already been declared
console.log(c);

var d;

d = 30;
let e;

e = 56;

const f = 12;

//todo: Data types
