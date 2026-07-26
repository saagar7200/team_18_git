//! array
// let num = 1;
// let num2 = 1;

//* new keyword / array constructor
// const arr = new Array(12, 3);
// * array literal  []

//* element
//* numbered indexed -> start from 0 => 0th indexed
//* length -> total number of elements

const numbers = [12, 3, 45, 78];

//* reading element
//? index ,  using bracket notation
// const first = numbers[0];
// console.log(first);
// console.log(numbers[1]);

//* length
// array.length
// console.log("length", numbers.length);
// console.log("last", numbers[numbers.length - 1]);

// console.log(numbers);

//* adding new element
//! end index
//? push()  -> numbers.push(...items)
// numbers.push(15);
// numbers.push(15, 34, 57);

//! start index
//? unshift
// numbers.unshift(34);
// numbers.unshift(34, 45, 6);

console.log(numbers);
//* removing element
//! end index
//? pop()  => numbers.pop()
// const ele = numbers.pop();
// console.log(ele); //

//! start index
//? shift()  => numbers.shift()
// const ele = numbers.shift();
// console.log(ele);

//* splice()
//? numbers.splice(start_index,delete_count,ele1,ele2,ele2,....eleN)
// const a = numbers.splice(1, 2); // []

const a = numbers.splice(1, 2, 34, 5, 6); // []

console.log(a);

//! searching
//* includes
// return boolean
console.log(numbers[12]);
console.log(numbers.includes(34)); //
console.log(numbers.includes(340)); //

//* indexOf()
//* return index
console.log(numbers.indexOf(34)); //
console.log(numbers.indexOf(340)); //

//* slice

console.log(numbers);

// colors = []
//* read
//last element
//* add
//? start  ,end

//* remove
//* start , end
