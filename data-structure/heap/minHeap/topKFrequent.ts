function topKFrequent(nums: number[], k: number): number[] {
  const countingMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Get the count for the
    // element if already present in the
    // Map or get the default value which is 0.

    if (countingMap.has(nums[i])) {
      countingMap.set(nums[i], countingMap.get(nums[i]) + 1);
    } else {
      countingMap.set(nums[i], 1);
    }
  }

  // Create a list of entries from elements of HashMap
  let entries = [...countingMap];

  // Sort the list
  entries.sort((entry1, entry2) => {
    // Same count value => compare item value
    if (entry1[1] == entry2[1]) return entry2[0] - entry1[0];
    // Compare count value
    else return entry2[1] - entry1[1];
  });

  // Return the first k items
  return entries.slice(0, k).map((entry) => entry[0]);
}
