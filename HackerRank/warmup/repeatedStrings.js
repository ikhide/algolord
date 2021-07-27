function repeatedString(s, n) {
  // Write your code here

  if (s.length === 1) {
    return s === "a" ? n : 0;
  }
  let freqOfA = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === "a") freqOfA++;
  }

  let freqOfCompleteString = Math.floor(n / s.length);
  let remainder = n % s.length;

  let incompleteArray = s.split("");
  incompleteArray.length = remainder;

  let noOfaInSubstring = 0;
  for (let i = 0; i < remainder; i++) {
    if (incompleteArray[i] === "a") noOfaInSubstring++;
  }

  let noOfaInCompleteString = freqOfCompleteString * freqOfA + noOfaInSubstring;

  return noOfaInCompleteString;
}

console.log(repeatedString("aba", 11));
