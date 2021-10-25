const findTheDifference = (s, t) => {
  const freq = {};
  let res;
  for (let i = 0; i < t.length; i++) freq[t[i]] = (freq[t[i]] || 0) + 1;

  for (let j = 0; j < t.length; j++) if (freq[s[j]]) freq[s[j]]--;

  Object.keys(freq).map((item) => {
    if (freq[item]) res = item;
  });

  return res;
};

console.log(findTheDifference("", "y"));
