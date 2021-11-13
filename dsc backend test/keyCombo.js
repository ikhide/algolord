function matchKeyCombo(sequence) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i + 2] !== undefined) {
      if (
        (sequence[i] + sequence[i + 1] + sequence[i + 2]).toUpperCase() ===
        "QEE"
      )
        count1++;
      if (
        (sequence[i] + sequence[i + 1] + sequence[i + 2]).toUpperCase() ===
        "ZCC"
      )
        count2++;
    }
  }

  return count1 === count2;
}

console.log(matchKeyCombo("QEEAZCC"));
