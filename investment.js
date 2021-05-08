let input = [200, 200];
//   [1, 5, 6, 7, 34, 10, 300];
//   [10, 1, 5, 6, 7, 34, 10, 20];
//   [1, 5, 6, 7, 34, 10];

const investmentStrategy = (input) => {
  //validate input
  if (
    !Array.isArray(input) ||
    input.length === 0 ||
    input === null ||
    input === undefined
  ) {
    return [-1, -1];
  }

  //Get all pairs
  pairs = [];
  input.map((lowerLimit, i) => {
    for (let j = i + 1; j < input.length; j++) {
      pairs.push([lowerLimit, input[j]]);
    }
  });

  //   Find pair with greatest difference
  let highestDiff = 0;
  let highestDiffPair = [];

  pairs.map((pair) => {
    let pairDifference = pair[1] - pair[0];
    if (pairDifference > highestDiff) {
      highestDiffPair = pair;
      highestDiff = pairDifference;
    }
  });

  //   get the order of days
  let buyDay = input.indexOf(highestDiffPair[0]);
  let sellDay = input.indexOf(highestDiffPair[1]);

  if (sellDay > buyDay) {
    return [buyDay, sellDay];
  } else if (sellDay < buyDay) {
    return [sellDay, sellDay];
  } else {
    return [0, 0];
  }
};

console.log(investmentStrategy([input]));
