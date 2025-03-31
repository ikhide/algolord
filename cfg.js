class CountWords {
  count(str) {
    let words = 0;
    let last = " "; // Initialize the last character as a space

    for (let i = 0; i < str.length; i++) {
      const currentChar = str.charAt(i);

      // Check if the current character is not a letter and the last character is 's' or 'r'
      if (!this.isLetter(currentChar) && (last === "s" || last === "r")) {
        console.log("here1");
        words++;

        console.log({ words });
      }

      // Update the last character
      last = currentChar;
    }

    // Check if the last character is 'r' or 's'
    if (last === "r" || last === "s") {
      console.log("here2");
      words++;
      console.log({ words });
    }

    return words;
  }

  // Helper function to check if a character is a letter
  isLetter(char) {
    return /^[a-zA-Z]$/.test(char); // Regex to check for alphabetic characters
  }
}

// Example usage:
const counter = new CountWords();
const inputString = "cars rule";
console.log(counter.count(inputString)); // Output: Number of words based on the logic
