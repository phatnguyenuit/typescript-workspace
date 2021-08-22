// Reference: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  // Start with array contains n zero items
  const startingArr = new Array<number>(n + 1).fill(0);

  for (let [a, b, k] of queries) {
    startingArr[a - 1] += k;
    startingArr[b] -= k;
  }

  let maxValue = 0;
  let sumValue = 0;

  for (let item of startingArr) {
    sumValue += item;

    if (sumValue > maxValue) {
      maxValue = sumValue;
    }
  }

  return maxValue;
}

// const queries = [
//   [1, 5, 3],
//   [4, 8, 7],
//   [6, 8, 1],
// ];
const queries = [
  [1, 3, 100],
  [2, 5, 100],
  [3, 4, 100],
];
const n = 5;
// const n = 10;
const result = arrayManipulation(n, queries);

console.log(`result`, result);
