let text = "Happy";

const reverseString = (text) => {
  let array = text.split("");
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray.join("");
};

const reverseString2 = (text) => text.split("").reverse().join("");
const reverseString3 = (text) => [...text].reverse().join("");

console.log(reverseString2(text));
