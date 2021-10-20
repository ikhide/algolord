// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
function minimumBribes(q) {
  let chaotic = false;
  let count = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaotic = true;
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) count++;
    }
  }

  if (chaotic) return "Too chaotic";
  else return count;
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
