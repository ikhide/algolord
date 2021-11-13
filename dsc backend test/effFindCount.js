function findUniqueNumbers(numbers) {
  let totalNumber = {};
  for (let i = 0; i < numbers.length; i++) {
    totalNumber[numbers[i]] = (totalNumber[numbers[i]] || 0) + 1;
  }

  const arrCount = [];
  Object.keys(totalNumber).map((value) => {
    if (totalNumber[value] === 1) {
      arrCount.push(Number(value));
      return;
    }
  });

  return arrCount;
}

let result = findUniqueNumbers([1, 2, 1, 3]);
console.log(result);
