//
// function add(a, b) {

//   console.log(a + b);
// }

// add(12, 4);
// add(12, 4);

// function parent() {
//   let x = "parent";
//   function inner() {
//     console.log(x); //
//   }
//   //   inner();
//   return inner;
// }
// const a = parent();
// console.log(a);
// a(); // x

// let count = 0;

// count = 35;

// function counter() {
//   count++;
// }

// const Counter = () => {
//   let count = 1;

//   const increment = () => {
//     console.log(count);
//     count++;
//   };

//   return increment;
// };

// const counter1 = Counter(); // {count:6}
// const counter2 = Counter(); // {count:3}

// counter1(); // 1
// counter1(); //2
// counter1(); //3
// counter1(); //4
// counter1(); //5
// counter2(); //1
// counter2(); //2

const Counter = () => {
  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  };

  const dec = () => {
    count--;
    console.log(count);
  };
  return {
    increment,
    decrement: dec,
  };
};

const counter1 = Counter(); // {count:1}
const counter2 = Counter(); // {count:1}
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// counter1.decrement();
// counter1.decrement();

// Account(name , initial_amt)
// withdraw(amt)
// deposit(amt)
// blc_inq() => clg / return

const Account = (name, initial_amt = 1000) => {
  let user_name = name;
  let balance = initial_amt;

  //* deposit
  const deposit = (amt) => {
    if (amt < 500) {
      console.log("amount must be greater than 500");
      return;
    }
    balance += amt;
    console.log("New balance:", balance);
  };

  //* withdraw
  const withdraw = (amt) => {
    if (amt < 500) {
      console.log("amount must be greater than 500");
      return;
    }
    balance -= amt;
    console.log("New balance:", balance);
  };

  const balance_inq = () => {
    console.log(balance);
  };

  return {
    deposit,
    withdraw,
    balance_inq,
  };
};

const ram = Account("Ram", 1000);
ram.deposit(500);
ram.balance_inq();
ram.withdraw(600);
ram.balance_inq();

//todo: function factory
//todo: caching
