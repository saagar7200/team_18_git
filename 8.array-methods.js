//* for of  -> iterables -> array , strings
// let arr = [1, 3, 5, 7];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// for (let value of "hello") {
//   console.log(value);
// }

//* for in   -> non iterables  -> object
// let user = {
//   name: "john",
//   email: "john@gmail.com",
//   password: "123456543",
// };
// for (let key in user) {
//   console.log(key, user[key]);
// }

// for (let key in arr) {
//   console.log(key);
// }

//! array methods
// arr.push() , pop , shift , unshift , splice, slice , includes , indexOf

//? higher order methods
// loop , transform , filter ,

// let numbers = [12, 23, 45, 6, 7, 8];
//* forEach  -> loop
//* arr_name.forEach(callback)

// let doubled = [];

// value , index , arr
// numbers.forEach((value, index, arr) => {
//   console.log(value, index, arr);
//   //   numbers[index] = value * 2;
//   //   doubled[index] = value * 2;
// });

//* map -> transformation
//* return new array
// const doubled = numbers.map((v, i, arr) => {
//   return v * 2;
// });

// console.log(doubled);

// const new_arr = numbers.map((v, i, arr) => {
//   return "*";
// });

// let users = [
//   {
//     name: "john",
//     email: "john@gmail.com",
//   },
//   {
//     name: "ram",
//     email: "ram@gmail.com",
//   },
//   {
//     name: "alice",
//     email: "alice@gmail.com",
//   },
// ];

//* user  => ['john@gmail.com' , 'ram@gmail.com' , 'alice@gmail.com']

// console.log(numbers);

// const user_emails = users.map((user) => {
//   //name - email
//   return user.name + "-" + user.email;
// });

// console.log(user_emails);

// const names = ["john", "ram", "alice"]; //  => ['JOHN' ,'RAM' , 'ALICE']  -> name.toUpperCase()

// const caps_name = names.map((name) => {
//   //
//   return name.toUpperCase();
// });
// console.log(caps_name);

//* filter , reduce
let numbers = [12, 23, 45, 6, 7, 8];

// const even_numbers = numbers.filter((num, i) => {
//   if (num % 2 === 0) {
//     return true;
//   }
// });

const even_numbers = numbers.filter((num) => num % 2 === 0);
const odd_numbers = numbers.filter((num) => num % 2 !== 0);
// console.log(numbers);
// console.log(even_numbers);
// console.log(odd_numbers);

let users = [
  {
    name: "john",
    age: 18,
    email: "john@gmail.com",
    subscribed: false,
  },
  {
    name: "ram",
    age: 14,
    email: "ram@gmail.com",
    subscribed: true,
  },
  {
    name: "alice",
    age: 30,
    email: "alice@gmail.com",
    subscribed: true,
  },
];

//
// let new_users = users.filter((user) => user.age >= 18);
// let new_users = users.filter((user) => user.age >= 18 && user.subscribed);
// let new_users = users.filter((user) => user.age >= 18 || user.subscribed);
// console.log(new_users);

//* reduce
//? arr_name.reduce((prev_val,curr_val,curr_index, curr_arr)=>{},initial_val)
// [ 12, 23, 45, 6, 7, 8 ]  => total_sum
// curr =12 prev=0   sum = 12 + 0 , i=0
// curr =23 prev =12  sum = prev + 23 , i=1
// curr =45 prev =35  sum = prev + 45 , i=2
const total_sum = numbers.reduce((acc, num) => {
  return (acc = acc + num);
}, 0);

// console.log(total_sum);

let cart = {
  userId: 1,
  items: [
    {
      product: {
        id: 1,
        name: "product 1",
        price: 1000,
      },
      quantity: 5,
    },
    {
      product: {
        id: 3,
        name: "product 3",
        price: 1200,
      },
      quantity: 3,
    },
    {
      product: {
        id: 10,
        name: "product 10",
        price: 900,
      },
      quantity: 8,
    },
  ],
};

// const total_amount =
// => {name , avg_marks , marks}
const students = [
  {
    name: "John",
    marks: [24, 56, 76, 78, 68],
  },
  {
    name: "Alice",
    marks: [52, 56, 30, 24, 68],
  },
  {
    name: "Bob",
    marks: [52, 56, 67, 78, 45],
  },
];

// avg_marks >=50 -> passed
// => ['john','alice']

// const newArr = students.map((student) => {
//   // calculate avg marks
//   const avg_marks =
//     student.marks.reduce((acc, mark) => {
//       return acc + mark;
//     }, 0) / student.marks.length;

//   return {
//     ...student,
//     avg_marks,
//   };
// });

// const passed_stu = newArr.filter((stu) => stu.avg_marks >= 50);

// const result = passed_stu.map((stu) => {
//   return stu.name;
// });
// console.log(result);

const calculateAvg = (arr) => {
  arr.reduce((acc, mark) => {
    return acc + mark;
  }, 0) / arr.length;
};

const result = students
  .map((student) => ({
    ...student,
    avg_marks: calculateAvg(student.marks),
  }))
  .filter((stu) => stu.avg_marks >= 50)
  .map((stu) => stu.name);

// console.log(result);

let products = [
  {
    _id: 1,
    name: "product 1",
    category: "electronics",
  },
  {
    _id: 2,
    name: "product 2",
    category: "furniture",
  },
  {
    _id: 3,
    name: "product 3",
    category: "furniture",
  },
  {
    _id: 4,
    name: "product 4",
    category: "electronics",
  },
  {
    _id: 5,
    name: "product 5",
    category: "clothing",
  },
  {
    _id: 5,
    name: "product 5",
    category: "cat",
  },
];

// => {electronics:[{},{}] , furniture:[{},{}] , clothing:[{}] , ''}

const res = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

// const res1 = products.reduce((acc, product) => {
//   (acc[product.category] ??= []).push(product);
//   return acc;
// }, {});

console.log(res);
// console.log(res1);
//todo: find ->  value ,
//todo: findIndex -> index , -1
//? every
//? some
