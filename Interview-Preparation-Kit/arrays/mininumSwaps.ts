// Reference: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumSwaps(arr: number[]): number {
  let swaps = 0;
  let placedItems = 0;

  while (placedItems < arr.length) {
    for (let i = placedItems; i < arr.length; i++) {
      const currentItem = arr[i];

      if (currentItem !== i + 1) {
        const rightItemIndex = arr.indexOf(i + 1);
        arr[i] = i + 1;
        arr[rightItemIndex] = currentItem;
        swaps += 1;
      }

      placedItems += 1;
    }
  }

  return swaps;
}

// Reference solution: https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/

function minimumSwaps2(arr: number[]): number {
  let n = arr.length;

  // Create two arrays and
  // use as pairs where first
  // array is element and second array
  // is position of first element
  const posArr = arr.map((item, index) => [item, index]);

  // Sort the array by array element values to
  // get right position of every element as the
  // elements of second array.
  posArr.sort((entry, entry2) => entry[0] - entry2[0]);

  // To keep track of visited elements. Initialize
  // all elements as not visited or false.
  const visitedArr = new Array<boolean>(n).fill(false);

  // Initial result
  let swaps = 0;

  // Traverse array elements
  for (let i = 0; i < n; i++) {
    // already swapped and corrected or
    // already present at correct position
    if (visitedArr[i] || posArr[i][1] == i) continue;

    // find out the number of node in
    // this cycle and add in swaps
    let cycle_size = 0;
    let j = i;
    while (!visitedArr[j]) {
      visitedArr[j] = true;

      // move to next node
      j = posArr[j][1];

      cycle_size += 1;
    }

    // Update swaps by adding current cycle.
    if (cycle_size > 0) {
      swaps += cycle_size - 1;
    }
  }

  return swaps;
}

// const array = [7, 1, 3, 2, 4, 5, 6];
const array = [4, 3, 1, 2];
console.log(minimumSwaps2(array));
