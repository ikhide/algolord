/*
 * Complete the 'pointsBelong' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 *  5. INTEGER x3
 *  6. INTEGER y3
 *  7. INTEGER xp
 *  8. INTEGER yp
 *  9. INTEGER xq
 *  10. INTEGER yq
 */

function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  // Write your code here
  const isNonDegenerateTriangle = isNonDegenerateTriangle(
    x1,
    y1,
    x2,
    y2,
    x3,
    y3
  );
}

isNonDegenerateTriangle(x1, y1, x2, y2, x3, y3) {
    const a = Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );
    const b = Math.sqrt(
        Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2)
    );
    const c = Math.sqrt(
        Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2)
    );
    const s = (a + b + c) / 2;
    }