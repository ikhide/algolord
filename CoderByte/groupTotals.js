function GroupTotals(strArr) {
  const strObj = {};
  let sortedString = "";

  // create hash table from string
  strArr.map((str) => {
    const key = str[0];
    const value = str[3] ? Number(str[3]) * -1 : Number(str[2]);
    strObj[key] = (strObj[key] || 0) + value;
  });

  // sort keys and discard key with values of zero

  Object.keys(strObj)
    .sort()
    .map((sortedKey, i) => {
      if (strObj[sortedKey] !== 0) {
        sortedString += `${sortedKey}:${strObj[sortedKey]},`;
      }
    });

  // trim away trailling comma
  return sortedString.slice(0, -1);
}

console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]));
