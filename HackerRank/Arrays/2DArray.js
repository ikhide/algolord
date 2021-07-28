function hourglassSum(arr) {
  //create a list of starting positions for each hourGlass
  //create algorithm to calculate every other position from starting position
  //for each starting position, get the value of its children position
  const positions = [];
  const values = [];

  for (let x = 0; x < 4; x++)
    for (let y = 0; y < 4; y++)
      positions.push([
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 1],
        [x + 2, y],
        [x + 2, y + 1],
        [x + 2, y + 2],
      ]);

  positions.map((position) => {
    let totalSum = 0;
    position.map((matrix) => {
      totalSum = totalSum + arr[matrix[0]][matrix[1]];
    });
    values.push(totalSum);
  });

  return Math.max(...values);
}

const myArr = [
  [-1, -2, 1, 2, 3, 4],
  [-1, -2, 1, 2, 3, 4],
  [-1, -2, 1, 2, 3, 4],
  [-1, -2, 1, 2, 3, 4],
  [-1, -2, 1, 2, 3, 4],
  [-1, -2, 1, 2, 3, 4],
];

console.log(hourglassSum(myArr));
