function topKLargestNumbers(nums: number[], k: number): number[] {
  // Creating Min Heap for given
  // array with only k elements
  // Create min heap with priority queue
  const minHeap: number[] = [];

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // Loop For each element in array
  // after the kth element
  for (let i = k; i < nums.length; i++) {
    minHeap.sort();

    if (minHeap[0] > nums[i]) {
      continue;
    } else {
      // Remove the 1st item
      minHeap.shift();
      minHeap.push(nums[i]);
    }
  }

  return minHeap;
}

const nums: number[] = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
const k: number = 3;

console.log(topKLargestNumbers(nums, k));
