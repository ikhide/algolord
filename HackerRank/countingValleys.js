//Given a string of steps taken and number of steps, count the number of valleys

// valley is formed when

function countingValleys(steps, path) {
  let valleyMode = false;
  let valleyCount = 0;
  let up = 0;
  let down = 0;
  for (let i = 0; i < steps; i++) {
    path[i] === "U" ? up++ : down++;
    up === down && valleyMode ? valleyCount++ : null;
    valleyMode = down > up ? true : false;
  }

  return valleyCount;
}
console.log(countingValleys(8, "UDDDUDUU"));
