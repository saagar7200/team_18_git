// let john = {
//   name: "john",
//   email: "",
//   password: "",
//   getName() {},
//   getPass() {},
// };
// let ram = {
//   name: "",
//   email: "",
//   password: "",
//   getName() {},
//   getPass() {},
// };

// let ram1 = {
//   name: "",
//   email: "",
//   password: "",
//   getName() {},
//   getPass() {},
// };

// let stu = {
//   name: "",
//   email: "",
//   password: "",
//   year:'',
//   faculty:'',
//   getName() {},
//   getPass() {},
// }

//! user
class User {
  //   name;
  //   email;
  #password; // private property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  //! methods
  getPassword() {
    return this.#password;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

//* creating user object
const john = new User("John Doe", "john@gmail.com", "123456");
const ram = new User("Ram", "ram@gmail.com", "54321");
console.log(john);
console.log(john.getEmail());
console.log(john.getPassword());
// console.log(ram.#password);

//! Student(name , email , password , year , faculty, roll)
// pass -> private  -> get name ,email pass

// class Student  {
//   name;
//   email;
//   #password;
//   year;
//   faculty;
//   roll;

//   constructor(name, email, password, year, faculty, roll) {
//     this.#password = password;
//     this.email = email;
//     this.name = name;
//     this.year = year;
//     this.faculty = faculty;
//     this.roll = roll;
//   }

//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getPassword() {
//     return this.#password;
//   }
// }

// const stu1 = new Student("alice", "alice@gmail.com", "23432", 2017, "BCT", 56);
// console.log(stu1);
// console.log(stu1.getPassword());

//! inheritance
class Student extends User {
  //   year;
  //   faculty;
  //   roll;

  //  super()
  constructor(name, email, password, year, faculty, roll) {
    super(name, email, password);
    this.year = year;
    this.faculty = faculty;
    this.roll = roll;
  }
}

const stu1 = new Student("alice", "alice@gmail.com", "23432", 2017, "BCT", 56);
console.log(stu1);
console.log(stu1.getPassword());
console.log(stu1.getName());

//todo: static methods, getter , setter
//! this key word


//! 