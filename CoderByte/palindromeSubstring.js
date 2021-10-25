function createSubstring(str) {
  result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function isPalindrome(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

function PalindromicSubstring(str) {
  const palindromeList = [];

  const strPalindrome = createSubstring(str);

  strPalindrome.map((string) => {
    const checkPalindrome = isPalindrome(string);
    if (checkPalindrome && string.length > 2) {
      palindromeList.push(string);
    }
  });

  if (palindromeList.length === 0) {
    return "none";
  }
  return palindromeList.reduce((a, b) => (a.length > b.length ? a : b), "");
}

// function getSubstrings(str){
//     const substrings = str.split('')
//     return [...substrings,...str.match(/.{1,2}/g)];
//   }
