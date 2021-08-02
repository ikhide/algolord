function rotLeft(a, d) {
  for (i = 1; i <= d; i++) {
    a.splice(a.length - 1, 1, a.splice(0, 1)[0]);
  }
  return a;
}
console.log(rotLeft([1, 2, 3, 4, 5], 3));
