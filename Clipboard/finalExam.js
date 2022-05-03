let ar = [
  [4, 8],
  [14, 18],
];

/*
[ [4,8], [14,18] ] -> add(5) => nothing
[ [4,8], [14,18] ] -> add(9) => [ [4,9], [14,18] ]
[ [4,8], [14,18] ] -> add(10) => [ [4,8], [10,10], [14,18] ]

*/

class intervals_set {
  add(N) {
    for (let i = 0; i < ar.length; i++) {
      let lower = ar[i][0];
      let higher = ar[i][1];
      let next = ar[i + 1];
      let prev = ar[i - 1];

      //merge case
      if (next && N === next[0] - 1 && N === higher + 1) {
        const newArray = [lower, next[1]];
        ar.splice(i, 2, newArray);
        return;
      }

      //reduce lower case
      if (N === lower - 1) {
        ar[i][0] = N;
        return;
      }
      //increase higher case
      if (N === higher + 1) {
        ar[i][1] = N;
        return;
      }
      // new lower case
      if (prev && prev[1] < N && N < lower - 1) {
        ar.splice(i, 0, [N, N]);
        return;
      }
      if (!prev && N < lower) {
        ar.splice(i, 0, [N, N]);
        return;
      }

      //new higher case
      if (!next && N + 1 > prev[1] + 1) {
        ar.splice(i + 1, 0, [N, N]);
        return;
      }
    }
  }

  add2(N) {
    for (let i = ar.length - 1; i >= 0; i--) {
      const lower = ar[i][0];
      const higher = ar[i][1];
      const next = ar[i + 1];
      const prev = ar[i - 1];

      if (lower - N === 1 && N - (prev && prev[1]) === 1) {
        return ar.splice(i - 1, 2, [prev[0], higher]);
      }
      if (N < lower && lower - N === 1) {
        return (ar[i][0] = N);
      } else if (N > higher && N - higher === 1) {
        return (ar[i][1] = N);
      } else if (N < lower && ((N - prev && prev[1] !== 1) || !prev)) {
        return ar.splice(i, 0, [N, N]);
      } else if (N > higher && ((next && next[0]) - N !== 1 || !next)) {
        return ar.splice(i + 1, 0, [N, N]);
      }
    }
  }

  remove(N) {}

  has(N) {}
}

const mySet = new intervals_set();
// mySet.add(20)
mySet.add2(1);
mySet.add2(11);
mySet.add(20);
mySet.add(19);
mySet.add(10);
mySet.add(12);
mySet.add(13);
mySet.add(9);
mySet.add(3);
mySet.add(2);
console.log(ar);
