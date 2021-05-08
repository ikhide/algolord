const flatten = (array) => {
  const result = [];

  //Iterate through Array
  array.forEach((i) => {
    //Recursively flatten array type items
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      //push flattened values to result array
      result.push(i);
    }
  });

  return result;
};

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

console.log(flatten(nested));
