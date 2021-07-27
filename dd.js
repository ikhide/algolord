function test(input1, input2) {
  obj = {};
  input1.map((number) => {
    let myNumber = parseInt(number);
    for (i = 0; i <= myNumber; i++) {
      let reversedNumber = String(i).split("").reverse().join("");
      if (i + parseInt(reversedNumber) === myNumber) {
        if (!obj[number]) obj[number] = true;
      }
    }
  });

  let count = Object.values(obj).length;
  return count;
}

console.log(test(["22", "121"], 2));
