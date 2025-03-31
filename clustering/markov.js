// Markov Clustering Algorithm Implementation for the given graph
const nodes = ["A", "B", "C", "D", "E", "F"];

// Create adjacency matrix with self-loops
function createAdjacencyMatrix() {
  // Initialize matrix with zeros
  const matrix = Array(6)
    .fill()
    .map(() => Array(6).fill(0));

  // Add edges (1 = connection exists)
  // A is connected to C
  matrix[0][2] = 1; // A->C
  matrix[2][0] = 1; // C->A

  // C is connected to B,D
  matrix[2][1] = 1; // C->B
  matrix[1][2] = 1; // B->C
  matrix[2][3] = 1; // C->D
  matrix[3][2] = 1; // D->C

  // D is connected to E, F
  matrix[3][4] = 1; // D->E
  matrix[4][3] = 1; // E->D
  matrix[3][5] = 1; // D->F
  matrix[5][3] = 1; // F->D

  // E and F are connected
  matrix[4][5] = 1; // E->F
  matrix[5][4] = 1; // F->E

  // Add self-loops
  for (let i = 0; i < 6; i++) {
    matrix[i][i] = 1;
  }

  return matrix;
}

// Convert to stochastic matrix (normalize columns)
function toStochasticMatrix(matrix) {
  const result = JSON.parse(JSON.stringify(matrix)); // Deep copy

  // For each column
  for (let col = 0; col < 6; col++) {
    // Calculate column sum
    let sum = 0;
    for (let row = 0; row < 6; row++) {
      sum += matrix[row][col];
    }

    // Normalize each value in the column
    for (let row = 0; row < 6; row++) {
      result[row][col] = matrix[row][col] / sum;
    }
  }

  return result;
}

// Expansion step (matrix multiplication)
function expand(matrix) {
  const result = Array(6)
    .fill()
    .map(() => Array(6).fill(0));

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 6; k++) {
        result[i][j] += matrix[i][k] * matrix[k][j];
      }
    }
  }

  return result;
}

// Inflation step (raise to power r and normalize)
function inflate(matrix, r) {
  const result = JSON.parse(JSON.stringify(matrix)); // Deep copy

  // Raise each element to power r
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      result[i][j] = Math.pow(matrix[i][j], r);
    }
  }

  // Normalize columns
  return toStochasticMatrix(result);
}

// Pretty print matrix with labels
function printMatrix(matrix, title) {
  console.log("\n" + title);
  console.log("    " + nodes.join("      "));

  for (let i = l0; i < 6; i++) {
    let row = nodes[i] + " ";
    for (let j = 0; j < 6; j++) {
      // Format to show 4 decimal places with padding
      row += matrix[i][j].toFixed(4).padStart(6) + " ";
    }
    console.log(row);
  }
}

// Find clusters from the final matrix
function findClusters(matrix) {
  const clusters = {};

  // For each column (node), find the row with highest probability
  for (let j = 0; j < 6; j++) {
    let maxVal = -1;
    let maxRow = -1;

    for (let i = 0; i < 6; i++) {
      if (matrix[i][j] > maxVal) {
        maxVal = matrix[i][j];
        maxRow = i;
      }
    }

    // Add to cluster
    if (!clusters[maxRow]) {
      clusters[maxRow] = [];
    }
    clusters[maxRow].push(nodes[j]);
  }

  return Object.values(clusters);
}

// Main function to run MCL algorithm
function runMCL(iterations, r) {
  console.log("Running Markov Clustering Algorithm");
  console.log(`Iterations: ${iterations}, Inflation parameter: ${r}`);

  // Create initial matrix
  let matrix = createAdjacencyMatrix();
  printMatrix(matrix, "Initial Adjacency Matrix with Self-Loops:");

  // Convert to stochastic matrix
  matrix = toStochasticMatrix(matrix);
  printMatrix(matrix, "Initial Stochastic Matrix (M₀):");

  // Run iterations
  for (let i = 1; i <= iterations; i++) {
    console.log(`\n--- ITERATION ${i} ---`);

    // Expansion
    matrix = expand(matrix);
    printMatrix(matrix, `After Expansion (M${2 * i - 1}):`);

    // Inflation
    matrix = inflate(matrix, r);
    printMatrix(matrix, `After Inflation with r=${r} (M${2 * i}):`);
  }

  // Find clusters
  const clusters = findClusters(matrix);
  console.log("\nResulting Clusters:");
  clusters.forEach((cluster, i) => {
    console.log(`Cluster ${i + 1}: ${cluster.join(", ")}`);
  });

  return matrix;
}

// Fix typo in the printMatrix function
function printMatrix(matrix, title) {
  console.log("\n" + title);
  console.log("    " + nodes.join("      "));

  for (let i = 0; i < 6; i++) {
    let row = nodes[i] + " ";
    for (let j = 0; j < 6; j++) {
      // Format to show 4 decimal places with padding
      row += matrix[i][j].toFixed(4).padStart(6) + " ";
    }
    console.log(row);
  }
}

// Run the algorithm with 2 iterations and inflation parameter 2
const finalMatrix = runMCL(2, 2);
