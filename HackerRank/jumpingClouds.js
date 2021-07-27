function jumpingOnClouds(c) {
  // Write your code here
  let path = [];

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      path.push(i + 2);
      i = i + 1;
    } else if (c[i + 1] === 0) {
      path.push(i + 1);
    }
  }
  return path.length;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0]));
