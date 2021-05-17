// Solution to problem: Check if string of text has a palindrome

// function hasPalindrome2(word) {
//   word = word.split("");
//   let obj = {};
//   for (i = 0; i < word.length; i++) {
//     if (obj[word[i]] === undefined) {
//       obj[word[i]] = 1;
//     } else {
//       obj[word[i]]++;
//     }
//   }

//   let oddCount = 0;
//   let values = Object.values(obj);
//   for (i = 0; i < values.length; i++) {
//     if (values[i] % 2 !== 0) {
//       oddCount++;
//     }
//   }
//   if (oddCount > 1) {
//     return false;
//   }
//   return true;
// }

function hasPalindrome(word) {
  word = word.split("");
  let obj = {};
  let oddNumbers = [];
  //O n
  for (i = 0; i < word.length; i++) {
    const char = word[i];
    let charCount = obj[char];
    if (!charCount) {
      oddNumbers.push(char);
      obj[char] = 1;
    } else {
      obj[char] = charCount++;
      const idxNum = oddNumbers.indexOf(char);
      if (idxNum >= 0) {
        oddNumbers.splice(idxNum, 1);
      }
    }
  }

  return oddNumbers.length <= 1;
}

console.log(hasPalindrome("racecar"));

// function hasPalindrome2 (word) {
//     const pairSet = new Set();
//     for (let i = 0; i < word.length; i++) {
//         if (pairSet.has(word[i])) {
//             pairSet.delete(word[i]);
//         }
//         else {
//             pairSet.add(word[i]);
//         }
//     }
//     return pairSet.size <= 1;
// }

// console.log(hasPalindrome2('rarca'))
