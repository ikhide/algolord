const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(b());
  }, 300);
});

// callback(1, () => {
//   console.log("Hello");
// });

console.log(myPromise.then(() => console.log("hello").catch()));
//Type:post,get
//fcontent-type" a
//body
//return

// authentication: protection (JWT, OAuth, AWS SSO)
// AUthorization: levels

// Redis caching(users)
// /api/v1/
// /api/v2
// rate limition
// backend: caching, microservice architecture, horizontal
// DB: Sharding, indexin
