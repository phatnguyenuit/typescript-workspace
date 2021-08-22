// Reference: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpingOnClouds(c: number[]): number {
  // Write your code here
  let currentIndex = 0;
  let minimumSteps = 0;

  while (currentIndex < c.length - 1) {
    currentIndex =
      c[currentIndex + 2] === 0 ? currentIndex + 2 : currentIndex + 1;
    minimumSteps += 1;
  }

  return minimumSteps;
}

// const c = [0, 0, 1, 0, 0, 1, 0];
const c = [0, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds(c));
