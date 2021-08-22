// Reference: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

type EqualComparator<T> = (item1: T, item2: T) => boolean;

const defaultComparator = <T>(item1: T, item2: T) => item1 === item2;

function count<T>(
  iterable: Iterable<T> | ArrayLike<T>,
  countingItem: T,
  equalComparator: EqualComparator<T> = defaultComparator,
) {
  const filteredItems = Array.from(iterable).filter((item) =>
    equalComparator(item, countingItem),
  );

  return filteredItems.length;
}

function repeatedString(s: string, n: number): number {
  // Write your code here
  const stringLength = s.length;
  const aFrequencyInSingleTerm = count(s, 'a');
  const numOfTerms = Math.floor(n / stringLength);
  const lastSubstrLength = n - numOfTerms * stringLength;

  if (!lastSubstrLength) {
    return aFrequencyInSingleTerm * numOfTerms;
  }

  const lastSubstr = s.substring(0, lastSubstrLength);
  const aFrequencyInLastSubstr = count(lastSubstr, 'a');

  return aFrequencyInSingleTerm * numOfTerms + aFrequencyInLastSubstr;
}

const n = 10;
const s = 'aba';

console.log(repeatedString(s, n));
