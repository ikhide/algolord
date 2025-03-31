// Function to normalize a matrix (make each row sum to 1)
function normalizeMatrix(matrix) {
  // First convert any negative values to 0
  const nonNegativeMatrix = matrix.map((row) =>
    row.map((value) => (value < 0 ? 0 : value))
  );
  console.log("Non-Negative Matrix:");
  nonNegativeMatrix.forEach((row) => console.log(row));

  // Then normalize the matrix
  return nonNegativeMatrix.map((row) => {
    let rowSum = row.reduce((sum, val) => sum + val, 0);
    console.log(`Row Sum:`, rowSum);
    // Avoid division by zero
    return row.map((val) => (rowSum === 0 ? 0 : val / rowSum));
  });
}

function computeGlobalTrust(iterations, trustScores, trustMatrix) {
  // Normalize the matrix initially
  let normalizedMatrix = normalizeMatrix(trustMatrix);

  console.log("Initial Normalized Matrix:");
  normalizedMatrix.forEach((row) => console.log(row));

  // Perform iterations
  for (let iter = 0; iter < iterations; iter++) {
    // Calculate new trust scores using normalized matrix
    let newTrustScores = new Array(trustScores.length).fill(0);
    for (let i = 0; i < trustScores.length; i++) {
      for (let j = 0; j < trustScores.length; j++) {
        newTrustScores[i] += normalizedMatrix[i][j] * trustScores[j];
      }
    }

    // Update trust scores for next iteration
    trustScores = newTrustScores;

    // Re-normalize the matrix for the next iteration
    normalizedMatrix = normalizeMatrix(trustMatrix);

    console.log(`\nIteration ${iter + 1} Trust Scores:`, trustScores);
  }

  return trustScores;
}

// Example usage:
const initialTrustScores = [0.7, 0.4, 0.6, 0.6];
const trustMatrix = [
  [0, 1, 1, -9],
  [1, 0, 1, -1], // Added a negative value for testing
  [1, 1, 0, -1],
  [1, 1, 1, 0], // Added a negative value for testing
];

console.log(
  "Final Trust Scores:",
  computeGlobalTrust(3, initialTrustScores, trustMatrix)
);
