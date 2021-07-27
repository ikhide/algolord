function generateWord(input) {
  let word = [];
  let backlog = [];
  input.map((alphabet, i) => {
    if (word.length < 1) {
      return word.push(alphabet.charAt(0), alphabet.charAt(2));
    } else {
      if (word.indexOf(alphabet[2]) >= 0) {
        return word.splice(word.indexOf(alphabet[2]), 0, alphabet[0]);
      } else if (word.indexOf(alphabet[0]) >= 0) {
        return word.splice(word.indexOf(alphabet[0]) + 1, 0, alphabet[2]);
      } else {
        backlog = alphabet;
      }
    }
  });
  if (backlog) {
    word.splice(word.indexOf(backlog[2]), 0, backlog[0]);
  }

  return word.join("");
}


console.log(generateWord(["M>P","L>A","A>M"]));
