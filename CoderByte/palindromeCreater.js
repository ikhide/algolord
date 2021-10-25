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

function PalindromeCreator(str) {
  let cutString = str.split("");
  if (isPalindrome(str) && str.length > 2) return "palindrome";

  let notPossible = true;

  //For single characters
  for (let i = 0; i < str.length; i++) {
    cutString.splice(i, 1);
    if (cutString.length > 2 && isPalindrome(cutString.join(""))) {
      notPossible = false;
      return str[i];
    }
    cutString = str.split("");
  }

  //For double characters
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1]) {
      cutString.splice(i, 2);
      if (cutString.length > 2 && isPalindrome(cutString.join(""))) {
        notPossible = false;
        return str[i] + str[i + 1];
      }
      cutString = str.split("");
    }
  }

  if (notPossible) return "not possible";
}
