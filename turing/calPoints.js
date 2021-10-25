const calPoint = (ops) => {
  let sol = [];
  ops.map((item, i) => {
    if (/\d/.test(item) === true) {
      sol.push(Number(item));
    } else if (item === "C") {
      sol.pop();
    } else if (item === "D") {
      const newVal = sol[sol.length - 1] * 2;
      sol.push(newVal);
    } else if (item === "+") {
      const newVal = sol[sol.length - 1] + sol[sol.length - 2];
      sol.push(newVal);
    }
  });
  return sol.reduce((a, b) => a + b, 0);
};

console.log(calPoint(["5", "-2", "4", "C", "D", "9", "+", "+"]));
