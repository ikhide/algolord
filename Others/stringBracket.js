const stringBracket = (str) => {
  let pointer = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const string = str[i];
    if (string === "(") {
      pointer++;
    } else if (string === ")") {
      pointer--;
    } else if (pointer === 0) {
      result += string;
    }
  }

  return result;
};
console.log(stringBracket("123(4(5)6(7))89(0)"));
