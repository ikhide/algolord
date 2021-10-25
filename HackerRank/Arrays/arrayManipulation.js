start = Date.now();

function arrayManipulation(n, queries) {
  for (let i = 1; i < n; i++) {
    if (queries[i][0]) {
      total += queries[0][2];
    }
  }

  return total;
}

console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ]),

  "time1",
  Date.now() - start
);
// less optimal solution
function arrayManipulation2(n, queries) {
  let values = {};

  for (let index = 0; index < queries.length; index++) {
    for (let i = queries[index][0]; i <= queries[index][1]; i++) {
      values[i] = (values[i] || 0) + queries[index][2];
    }
  }

  return Math.max(...Object.values(values));
}

// console.log(
//   arrayManipulation2(5, [
//     [1, 2, 100],
//     [2, 5, 100],
//     [3, 4, 100],
//   ]),
//   "time2",
//   Date.now() - start
// );

function arrayManipulation3(n, queries) {
  let range = {};

  for (let i = 1; i <= n; i++) {
    range[i] = 0;
    queries.map((query) => {
      if (query[0] <= i && query[1] >= i) {
        range[i] += query[2];
      }
    });
  }

  return Math.max(...Object.values(range));
}

// console.log(
//   arrayManipulation(10, [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
//   ]),

//   "time1",
//   Date.now() - start
// );
