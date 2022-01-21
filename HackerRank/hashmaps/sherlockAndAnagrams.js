function sherlockAndAnagrams(s) {
  const substring = createSubstrings(s);
  const traverseString = [...substring];
  const len = traverseString.length;
  let count = {};
  let remove = false;

  for (let i = 0; i < len; i++) {
    let currentSubstring = substring[i];
    count[currentSubstring] = count[currentSubstring] || 0;
    let reversed = currentSubstring.split("").reverse().join("");

    console.log({ currentSubstring, reversed, traverseString });
    traverseString.forEach((string) => {
      if (string === reversed) {
        count[currentSubstring]++;
        remove = true;
      }
    });

    if (remove) traverseString.shift();
    remove = false;
  }
  return count;
}

function createSubstrings(str) {
  let i,
    j,
    result = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      str.slice(i, j).length !== str.length && result.push(str.slice(i, j));
    }
  }
  return result.sort();
}

console.log(sherlockAndAnagrams("ifailuhkqq"));
