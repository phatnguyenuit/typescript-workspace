// Reference: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine: string[], note: string[]): void {
  // Write your code here
  const wordMap: Record<string, number> = {};
  let replicable = true;

  for (let word of magazine) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }

  for (let word of note) {
    wordMap[word] = (wordMap[word] || 0) - 1;
  }

  for (let word in wordMap) {
    if (wordMap[word] < 0) {
      replicable = false;
      break;
    }
  }

  console.log(replicable ? 'Yes' : 'No');
}

const magazine = 'ive got a lovely bunch of coconuts'.split(' ');
const note = 'ive got some coconuts'.split(' ');

checkMagazine(magazine, note);
