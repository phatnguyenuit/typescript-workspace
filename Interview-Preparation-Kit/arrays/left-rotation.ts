// Reference: https://www.hackerrank.com/challenges/ctci-array-left-rotation/leaderboard?h_l=interview&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a: number[], d: number): number[] {
  // Write your code here
  return a.slice(d, a.length).concat(a.slice(0, d));
}

console.log(rotLeft([1, 2, 3, 4, 5], 2));
