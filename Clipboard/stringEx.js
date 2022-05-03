function StringExpression(str) {
  // code goes here

  options = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
    "-": "negative",
  };

  while (
    str.includes("plus") ||
    str.includes("minus") ||
    str.includes("one") ||
    str.includes("two") ||
    str.includes("three") ||
    str.includes("four") ||
    str.includes("five") ||
    str.includes("six") ||
    str.includes("seven") ||
    str.includes("eight") ||
    str.includes("nine") ||
    str.includes("zero")
  ) {
    str = str.replace("plus", "+");
    str = str.replace("minus", "-");
    str = str.replace("one", "1");
    str = str.replace("two", "2");
    str = str.replace("three", "3");
    str = str.replace("four", "4");
    str = str.replace("five", "5");
    str = str.replace("six", "6");
    str = str.replace("seven", "7");
    str = str.replace("eight", "8");
    str = str.replace("nine", "9");
    str = str.replace("zero", "0");
  }
  let result = eval(str);
  result = result.toString().split("");
  resultString = "";

  result.map((res) => {
    resultString += options[res];
  });
  return resultString.trim();
}

// keep this function call here
console.log(StringExpression("onezeropluseight"));
