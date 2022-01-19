function findJudge(N, trust) {
  const peopleThatTrust = [];
  const peopleTrusted = [];
  for (let i = 0; i < trust.length; i++) {
    peopleThatTrust.push(trust[i][0]);
    peopleTrusted.push(trust[i][1]);
  }
  const left = peopleTrusted.filter((item) => !peopleThatTrust.includes(item));

  return left.length === N - 1 ? left[0] : -1;
}

console.log(findJudge(2, [[1, 2]]));
