function ArrayChallenge(strArr) {
  sum = {};

  const firstArr = JSON.parse(strArr[0]);
  const secondArr = JSON.parse(strArr[1]);

  for (let i = 0; i < firstArr.length; i++) {
    sum[i] = !sum[i] ? firstArr[i] : sum[i] + firstArr[i];
  }

  for (let i = 0; i < secondArr.length; i++) {
    sum[i] = !sum[i] ? secondArr[i] : sum[i] + secondArr[i];
  }

  return Object.values(sum).join("-");
}

console.log(ArrayChallenge(["[1,2,3,4]", "[1]"]));
