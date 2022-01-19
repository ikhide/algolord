const isValid = (str) => {
  const openTag = "{[(";
  const obj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openTag.includes(str[i])) {
      stack.push(str[i]);
    } else {
      const last = stack[stack.length - 1];
      if (obj[str[i]] === last) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

s = "[(())][]{}";

console.log(isValid(s));
