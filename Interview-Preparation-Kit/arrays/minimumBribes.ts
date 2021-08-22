// Reference: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumBribes(q: number[]): void {
  // Write your code here
  const deductedQ = q.map((p) => p - 1);

  let moves = 0;

  for (let i = 0; i < deductedQ.length; i++) {
    const p = deductedQ[i];
    if (p - i > 2) {
      console.log('Too chaotic');
      return;
    }

    for (let j = Math.max(0, p - 1); j < i; j++) {
      const p2 = deductedQ[j];

      if (p2 > p) {
        moves += 1;
      }
    }
  }

  console.log(moves);
}
