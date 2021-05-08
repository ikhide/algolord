function findFactorialRecursive(number) {
  let total = 0;
  if (number !== 0) {
    total = number * findFactorialRecursive(number - 1);
    return total;
  } else {
    return 1;
  }
}

findFactorialRecursive(1000);

function findFactorialIterative(number) {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total = total * i;
  }

  return total;
}
findFactorialIterative(1000);
