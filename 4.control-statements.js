//! control flow

//! control statements

//? conditionals

//* if
// if(expression){
// logic
// }

// let age = null;
// if (age) {
//   console.log("You are ", age, "years old");
// }

//* if-else
// let age = null;
// if (age) {
//   console.log("You are ", age, "years old");
// } else {
//   console.log("Age not found");
// }

// let age = 18;
// if (age >= 18) {
//   console.log("can vote");
// } else {
//   console.log("can not vote");
// }

// if (age < 18) {
//   console.log("can not vote");
// } else {
//   console.log("can vote");
// }

//* else-if ladder
let age = 18;
//  age >= 60
// age >= 18
// else minor

if (age >= 60) {
  console.log("major");
} else if (age >= 18) {
  console.log("Adult");
}
// } else if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 18) {
//   console.log("Adult");
// } else if (age >= 18) {
//   console.log("Adult");
// }
else {
  console.log("minor");
}

//* switch-case
let day = 3;
// switch (day) {
//   case 1: {
//     console.log("Sunday");
//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

//? loops
//* do while
console.log("do while");
// let i = 1;
let i = 11;
do {
  console.log(i);
  i++;
} while (i <= 10);

//* while
console.log("while");

// let j = 1;
let j = 11;
while (j <= 10) {
  console.log(j);
  j++;
}

//* for loop
// for (initialization; condition; increment / decrement) {
//*   //block
// }

console.log("for");
// for (let k = 1; k <= 10; k++) {
//   console.log(k);
// }

//! for in
//! for of

//* jumping / branching keywords
//? break , continue , return
// for (let k = 1; k <= 10; k++) {
//   if (k == 5) {
//     break;
//   }
//   console.log(k);
// }

// for (let k = 1; k <= 10; k++) {
//   if (k == 5) {
//     continue;
//   }
//   console.log(k);
// }
