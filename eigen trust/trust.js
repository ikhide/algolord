/**
 * Implementation of the EigenTrust algorithm for P2P networks
 */

/**
 * Calculate the global trust values using the EigenTrust algorithm
 * @param {Array<Array<number>>} localTrust - Matrix of local trust values
 * @param {number} epsilon - Convergence threshold
 * @param {number} maxIterations - Maximum number of iterations
 * @param {Array<number>} pretrustVector - Optional vector of pre-trusted peers
 * @param {number} alpha - Damping factor for pre-trusted peers (0-1)
 * @returns {Array<number>} - Global trust values for each peer
 */
function calculateEigenTrust(
  localTrust,
  epsilon = 0.0001,
  maxIterations = 100,
  pretrustVector = null,
  alpha = 0.5
) {
  const n = localTrust.length;

  // Initialize vectors
  let trustVector = new Array(n).fill(1 / n); // Start with uniform distribution

  // If no pre-trusted peers are specified, use uniform distribution
  if (!pretrustVector) {
    pretrustVector = new Array(n).fill(1 / n);
  }

  // Normalize the local trust matrix
  const normalizedTrust = normalizeLocalTrust(localTrust);

  // Perform power iterations until convergence
  let iteration = 0;
  let converged = false;

  while (!converged && iteration < maxIterations) {
    // Calculate new trust vector
    const newTrustVector = calculateNextTrustVector(
      normalizedTrust,
      trustVector,
      pretrustVector,
      alpha
    );

    // Check for convergence
    const diff = calculateL1Norm(newTrustVector, trustVector);
    converged = diff < epsilon;

    // Update trust vector for next iteration
    trustVector = newTrustVector;
    iteration++;
  }

  return trustVector;
}

/**
 * Normalize the local trust matrix
 * @param {Array<Array<number>>} localTrust - Matrix of local trust values
 * @returns {Array<Array<number>>} - Normalized local trust matrix
 */
function normalizeLocalTrust(localTrust) {
  const n = localTrust.length;
  const normalizedTrust = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    // First, handle negative values by setting them to 0 (this is the sat() function in EigenTrust)
    const row = [...localTrust[i]];
    for (let j = 0; j < n; j++) {
      if (row[j] < 0) row[j] = 0;
    }

    // Calculate sum of row
    const sum = row.reduce((acc, val) => acc + val, 0);

    // Normalize row
    if (sum > 0) {
      for (let j = 0; j < n; j++) {
        normalizedTrust[i][j] = row[j] / sum;
      }
    } else {
      // If sum is 0 (peer has no outgoing trust), distribute evenly
      for (let j = 0; j < n; j++) {
        normalizedTrust[i][j] = 1 / n;
      }
    }
  }

  return normalizedTrust;
}

/**
 * Calculate the next trust vector in the iteration
 * @param {Array<Array<number>>} normalizedTrust - Normalized local trust matrix
 * @param {Array<number>} trustVector - Current trust vector
 * @param {Array<number>} pretrustVector - Pre-trusted peers vector
 * @param {number} alpha - Damping factor
 * @returns {Array<number>} - New trust vector
 */
function calculateNextTrustVector(
  normalizedTrust,
  trustVector,
  pretrustVector,
  alpha
) {
  const n = normalizedTrust.length;
  const newTrustVector = new Array(n).fill(0);

  // Basic matrix multiplication: trustVector * normalizedTrust (transposed)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newTrustVector[i] += trustVector[j] * normalizedTrust[j][i];
    }
  }

  // Add influence from pre-trusted peers with damping factor
  if (alpha > 0) {
    for (let i = 0; i < n; i++) {
      newTrustVector[i] =
        (1 - alpha) * newTrustVector[i] + alpha * pretrustVector[i];
    }
  }

  return newTrustVector;
}

/**
 * Calculate the L1 norm between two vectors (sum of absolute differences)
 * @param {Array<number>} vec1 - First vector
 * @param {Array<number>} vec2 - Second vector
 * @returns {number} - L1 norm
 */
function calculateL1Norm(vec1, vec2) {
  let sum = 0;
  for (let i = 0; i < vec1.length; i++) {
    sum += Math.abs(vec1[i] - vec2[i]);
  }
  return sum;
}

/**
 * Simulates file downloads and updates local trust based on authenticity
 * @param {number} peers - Number of peers in the network
 * @param {Set<number>} maliciousPeers - Set of indices of malicious peers
 * @param {number} interactions - Number of download interactions to simulate
 * @returns {Array<Array<number>>} - Local trust matrix after interactions
 */
function simulateInteractions(
  peers,
  maliciousPeers = new Set(),
  interactions = 100
) {
  const localTrust = Array(peers)
    .fill()
    .map(() => Array(peers).fill(0));

  for (let i = 0; i < interactions; i++) {
    // Random downloader and uploader
    const downloader = Math.floor(Math.random() * peers);
    let uploader = Math.floor(Math.random() * peers);

    // Ensure downloader and uploader are different
    while (uploader === downloader) {
      uploader = Math.floor(Math.random() * peers);
    }

    // Determine if file is authentic (not authentic if uploader is malicious)
    const isAuthentic = !maliciousPeers.has(uploader);

    // Update local trust
    if (isAuthentic) {
      localTrust[downloader][uploader] += 1;
    } else {
      localTrust[downloader][uploader] -= 1;
    }
  }

  return localTrust;
}

/**
 * Run EigenTrust example with and without malicious peers
 * @param {number} numPeers - Number of peers in the network
 * @param {number} numMalicious - Number of malicious peers to include
 */
function runEigenTrustExample(numPeers = 4, numMalicious = 1) {
  console.log("=== EigenTrust Example ===");

  // Example without malicious peers
  console.log("\nScenario 1: No Malicious Peers");
  const localTrustHonest = simulateInteractions(numPeers, new Set());
  console.log("Local Trust Matrix (Honest Network):");
  console.table(localTrustHonest);

  const globalTrustHonest = calculateEigenTrust(localTrustHonest);
  console.log("Global Trust Values (Honest Network):");
  globalTrustHonest.forEach((trust, i) => {
    console.log(`Peer ${i}: ${trust.toFixed(4)}`);
  });

  // Example with malicious peers
  console.log("\nScenario 2: With Malicious Peers");
  const maliciousPeerIds = new Set(
    Array.from({ length: numMalicious }, (_, i) => numPeers - i - 1)
  );
  console.log(`Malicious Peers: ${Array.from(maliciousPeerIds).join(", ")}`);

  const localTrustMalicious = simulateInteractions(numPeers, maliciousPeerIds);
  console.log("Local Trust Matrix (Network with Malicious Peers):");
  console.table(localTrustMalicious);

  const globalTrustMalicious = calculateEigenTrust(localTrustMalicious);
  console.log("Global Trust Values (Network with Malicious Peers):");
  globalTrustMalicious.forEach((trust, i) => {
    console.log(
      `Peer ${i}: ${trust.toFixed(4)}${
        maliciousPeerIds.has(i) ? " (Malicious)" : ""
      }`
    );
  });

  // Compare results
  console.log("\nComparison of Trust Values:");
  console.log("Peer\tHonest Network\tMalicious Network");
  for (let i = 0; i < numPeers; i++) {
    console.log(
      `${i}\t${globalTrustHonest[i].toFixed(4)}\t\t${globalTrustMalicious[
        i
      ].toFixed(4)}${maliciousPeerIds.has(i) ? " (M)" : ""}`
    );
  }
}

/**
 * Run a custom EigenTrust calculation with the specified local trust values
 * @param {Array<Array<number>>} localTrust - Matrix of local trust values
 */
function calculateCustomEigenTrust(localTrust) {
  console.log("=== Custom EigenTrust Calculation ===");
  console.log("Local Trust Matrix:");
  console.table(localTrust);

  const globalTrust = calculateEigenTrust(localTrust);
  console.log("Global Trust Values:");
  globalTrust.forEach((trust, i) => {
    console.log(`Peer ${i}: ${trust.toFixed(4)}`);
  });

  return globalTrust;
}

// Example usage with fixed trust values from the original examples
function runFixedExamples() {
  // Example 1: No malicious peers
  const localTrustExample1 = [
    [0, 5, 3, 2],
    [4, 0, 2, 3],
    [3, 4, 0, 2],
    [2, 3, 4, 0],
  ];

  console.log("\nExample 1: Network without malicious peers");
  const globalTrustExample1 = calculateCustomEigenTrust(localTrustExample1);

  // Example 2: With malicious peer D
  const localTrustExample2 = [
    [0, 5, 3, -2],
    [4, 0, 2, -3],
    [3, 4, 0, -2],
    [2, 3, 4, 0],
  ];

  console.log("\nExample 2: Network with malicious peer D");
  const globalTrustExample2 = calculateCustomEigenTrust(localTrustExample2);

  // Compare results
  console.log("\nComparison of Trust Values:");
  console.log("Peer\tExample 1\tExample 2");
  for (let i = 0; i < 4; i++) {
    console.log(
      `${String.fromCharCode(65 + i)}\t${globalTrustExample1[i].toFixed(
        4
      )}\t\t${globalTrustExample2[i].toFixed(4)}${
        i === 3 ? " (Malicious)" : ""
      }`
    );
  }
}

// Uncomment one of these to run the examples
runEigenTrustExample(6, 2); // 6 peers, 2 malicious
// runFixedExamples();

// Export functions for external use
module.exports = {
  calculateEigenTrust,
  normalizeLocalTrust,
  simulateInteractions,
  runEigenTrustExample,
  calculateCustomEigenTrust,
  runFixedExamples,
};
