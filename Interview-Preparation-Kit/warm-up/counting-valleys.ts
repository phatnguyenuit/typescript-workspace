/*
Reference: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/
function countingValleys(steps: number, path: string): number {
  // Write your code here
  let numOfValleys = 0;

  let prevAltitude = 0;
  let currentAltitude = 0;

  for (let step = 0; step < steps; step++) {
    const currentPath = path[step];
    const factor = currentPath === 'U' ? 1 : -1;

    prevAltitude = currentAltitude;
    currentAltitude += factor * 1;

    if (prevAltitude === -1 && currentAltitude === 0) {
      numOfValleys += 1;
    }
  }

  return numOfValleys;
}

/* cspell: disable-next-line */
const numOfValleys = countingValleys(8, 'UDDDUDUU');
console.log(numOfValleys);
