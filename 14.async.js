// synchronous programming

//* async

// console.log("start");
// console.log("processing");
// console.log("end");

//* setTimeout ->
// setTimeout(callback,timeout,arg1,arg2....agrN)
// console.log("start");
// const timer_id = setTimeout(
//   (name, age) => {
//     console.log("processing", name, age);
//   },
//   2000,
//   "john",
//   27,
// );
// console.log(timer_id);

// clearTimeout(timer_id);

// console.log(timer_id);

// console.log("end");

//! setInterval(callback,timeout)

// console.log("start");

// const id = setInterval(
//   (name) => {
//     console.log("interval", name);
//   },
//   1000,
//   "john",
// );

// let i = 1;
// const id = setInterval(() => {
//   console.log(i);
//   if (i === 10) {
//     clearInterval(id);
//   }
//   i += 1;
// }, 1000);

// console.log(id);

// console.log("end");

// countDown(seconds)  => hh:mm:ss  ->
// sec = 10
// 00:00:10
// 00:00:09
// 00:00:08
// 00:00:07
// 00:00:00  -> exit

// const countDown = (seconds) => {
//   setInterval(() => {
//     // format
//     // decrement
//     // clear interval
//   }, 1000);
// };

// countDown(100);
// countDown(10);

//todo: callback

//* login
const login = (callback) => {
  setTimeout(() => {
    const error = false;
    let user = { _id: 1, email: "john@gmail.com", role: "user" };
    //? callback(error,data)  -> callback(null , data)  -> callback(error)
    if (error) {
      callback({ message: "login failed" });
    } else {
      callback(null, user);
    }
  }, 3000);
};

//* getPosts
const getPosts = (userId, callback) => {
  setTimeout(() => {
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

    callback(null, posts);
  }, 2000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
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

    callback(null, comments);
  }, 2000);
};

console.log("start");
login((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("login success");
  console.log(user);

  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("posts fetched");
    console.log(posts);
    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("comments fetched");
      console.log(comments);
    });
  });
}); //

//! callback hell  -> promise

// getPosts(10, (error, posts) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("posts fetched");
//   console.log(posts);
// });
console.log("end");
