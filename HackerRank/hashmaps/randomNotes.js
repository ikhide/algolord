function checkMagazine(magazine, note) {
  const words = {};
  let canReproduce = "Yes";
  magazine.forEach((word) => (words[word] = (words[word] || 0) + 1));
  note.forEach((word) => {
    if (!words[word]) {
      canReproduce = "No";
    } else {
      words[word]--;
    }
  });

  console.log(canReproduce);
}

checkMagazine(
  ["give", "me ", "one", "grand", "today", "night"],
  ["give", "me ", "one", "grand"]
);
