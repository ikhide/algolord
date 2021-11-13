async function runSequentially(functions) {
  const promises = functions.map((func) => func());
  const res = await Promise.all(promises);
  return res;
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);

if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;
