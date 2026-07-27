//* promise

// new Promise()

//states
//? pending
//? fulfilled
//? rejected

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (error) {
//       reject({ message: "failed" });
//     } else {
//       resolve({ message: "success" });
//     }
//   }, 2000);
// });

// console.log(promise);

//! handling promise
// console.log("start");
// promise
//   .then((data) => {
//     console.log("fulfilled");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("rejected");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
// console.log("end");

//* user login
const userLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      let user = { _id: 1, email: "john@gmail.com", role: "user" };
      if (error) {
        reject({ message: "login failed" });
      } else {
        resolve(user);
      }
    }, 2000);
  });
};

//! handling promise
// userLogin()
//   .then((user) => {
//     console.log("login success");
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* fetch posts
const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      const posts = [
        {
          _id: 1,
          userId: userId,
          title: "post 1",
        },
        {
          _id: 2,
          userId: userId,
          title: "post 2",
        },
      ];
      if (error) {
        reject({ message: "fetch posts failed" });
      } else {
        resolve(posts);
      }
    }, 3000);
  });
};

// fetchPosts(10)
//   .then((posts) => {
//     console.log("posts fetched");
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      const comments = [
        {
          _id: 1,
          userId: 1,
          postId,
          title: "comment 1",
        },
        {
          _id: 2,
          userId: 2,
          postId,
          title: "comment 2",
        },
      ];
      if (error) {
        reject({ message: "fetch comments failed" });
      } else {
        resolve(comments);
      }
    }, 3000);
  });
};

// fetchComments(10)
//   .then((comments) => {
//     console.log("comments fetched");
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* promise chain

// userLogin()
//   .then((user) => {
//     console.log(user);
//     return fetchPosts(user._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return fetchComments(posts[0]._id);
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(data);

//! async await
//? try/catch block

//* async function

// const add = async (a, b) => {
//   // async

// };

// add(); //

const fetchData = async () => {
  try {
    const user = await userLogin();
    console.log(user);
    const posts = await fetchPosts(user._id);
    console.log(posts);
    const comments = await fetchComments(posts[0]._id);
    console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};
// console.log("start");
// fetchData();
// console.log("end");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

//* ES  -> Ecma script
//! es6 -> 2015
//? let const
//? template literal  ``
//? arrow function
//? default parameter
//? rest parameter

//? rest operator
//? destructuring
//? spread op.

//? map , filter, reduce ..

//?  class

//? promise / async/await

//? enhanced object literal -> {}

let name = "ram";
let key = "email";

let user = {
  name, //name:name  // name:'ram'
  // getName: function () {
  //   return this.name;
  // },
  getName() {
    return this.name;
  },
  [key]: "abc@gmail.com", // email:'abc@gmail.com'
};

//todo: Set, Map ->
