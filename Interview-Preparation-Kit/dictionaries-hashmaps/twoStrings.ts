// Reference: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1: string, s2: string): string {
  // Write your code here
  let hasCommonSubstring = false;
  const charMap = s1.split('').reduce<Record<string, number>>(
    (acc, char) => ({
      ...acc,
      [char]: (acc[char] || 0) + 1,
    }),
    {},
  );

  for (let char of s2.split('')) {
    if (charMap[char]) {
      hasCommonSubstring = true;
      break;
    }
  }

  return hasCommonSubstring ? 'YES' : 'NO';
}

const s1 = 'test';
const s2 = 'te';

console.log(twoStrings(s1, s2));
