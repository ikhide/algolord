start = Date.now();

function arrayManipulation(n, queries) {
  let values = {};

  queries.map((item, i) => {
    for (let i = item[0]; i <= item[1]; i++) {
      values[i] = (values[i] || 0) + item[2];
    }
  });

  return Math.max(...Object.values(values));
}

console.log(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
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

console.log(
  arrayManipulation2(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ]),
  "time2",
  Date.now() - start
);
