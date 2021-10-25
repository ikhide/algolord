function GetTheMedian(movingWindow) {
  movingWindow.sort((a, b) => a - b);
  if (movingWindow.length % 2 === 0) {
    let i1 = movingWindow.length / 2 - 1;
    let i2 = i1 + 1;
    return (movingWindow[i1] + movingWindow[i2]) / 2;
  } else {
    let i = (movingWindow.length - 1) / 2;
    return movingWindow[i];
  }
}

function GetNextSlidingWindow(listOfNumber, slidingWindowSize, currentIndex) {
  let currentSlidingArray = [];
  let i = currentIndex;

  if (listOfNumber[slidingWindowSize + currentIndex - 1] === undefined)
    return [];
  while (i < slidingWindowSize + currentIndex) {
    currentSlidingArray.push(listOfNumber[i]);
    i++;
  }

  currentIndex++;

  currentSlidingArray.sort((a, b) => a - b);
  let median = GetTheMedian(currentSlidingArray);
  return [
    median,
    ...GetNextSlidingWindow(listOfNumber, slidingWindowSize, currentIndex),
  ];
}

function MovingMedian(arr) {
  let slidingWindowSize = arr[0];
  let listOfNumber = arr.splice(1, arr.length); //remove window size indicator

  let preWindowSize = []; //Hold elements before getting to window size
  let listOfMedian = []; //Hold list of medians

  let i = 0;

  while (i < slidingWindowSize && i < listOfNumber.length) {
    preWindowSize.push(listOfNumber[i]);
    listOfMedian.push(GetTheMedian(preWindowSize));
    i++;
  }

  if (preWindowSize.length === listOfNumber.length) {
    return listOfMedian.join(","); //Convert to string
  } else {
    const nextMedianAfterWindowSize = GetNextSlidingWindow(
      listOfNumber,
      slidingWindowSize,
      1
    );
    return [...listOfMedian, ...nextMedianAfterWindowSize].join(","); //Convert to string
  }
}
