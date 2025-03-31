const list = [1, 2, 3, 4, 5];

const logPairs = (boxes) => {
  boxes.map((box) => {
    boxes.map((pair) => {
      console.log([box, pair]);
    });
  });
};

logPairs(list);
