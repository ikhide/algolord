function twoStrings(s1, s2) {
  const words = {};

  for (var i = 0; i < s1.length; i++) {
    words[s1[i]] = (words[s1[i]] || 0) + 1;
  }

  let containsSubstring = "NO";
  for (var i = 0; i < s2.length; i++) {
    if (words[s2[i]]) {
      containsSubstring = "YES";
    }
  }

  return containsSubstring;
}
twoStrings("hello", "i");
