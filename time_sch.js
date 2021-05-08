const times = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
  { startTime: 2, endTime: 10 },
];

const mergeRanges = (unmerged) => {
  let sortedRanges = sortTime(unmerged);
  let mergeRange = [];

  sortedRanges.map((period, i) => {
    if (
      i < times.length - 1 &&
      period.endTime >= sortedRanges[i + 1].startTime
    ) {
      mergeRange.push({
        startTime: [period.startTime],
        endTime: [sortedRanges[i + 1].endTime],
      });

      sortedRanges.filter((ex) => ex !== sortedRanges[i + 1]);
      console.log("sortedRanges", sortedRanges);
      console.log("mergeRange", mergeRange);
    }
  });
  // return mergeRange;
};

const sortTime = (time) => {
  let sortedObj = [...time];

  sortedObj.sort(function (a, b) {
    return a.startTime - b.startTime;
  });

  return sortedObj;
};
console.log(mergeRanges(times));
