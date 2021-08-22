const sumArray = (...arr: number[]) => {
  return arr.reduce((acc, item) => acc + item, 0);
};

function hourglassSum(arr: number[][]): number {
  // Write your code here
  const sums = [];
  const arrayLength = arr.length;

  for (let rowNo = 0; rowNo < arrayLength - 2; rowNo++) {
    for (let colNo = 0; colNo < arrayLength - 2; colNo++) {
      sums.push(
        sumArray(
          arr[rowNo][colNo],
          arr[rowNo][colNo + 1],
          arr[rowNo][colNo + 2],
          arr[rowNo + 1][colNo + 1],
          arr[rowNo + 2][colNo],
          arr[rowNo + 2][colNo + 1],
          arr[rowNo + 2][colNo + 2],
        ),
      );
    }
  }

  return Math.max(...sums);
}

const _2dArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(_2dArr));
