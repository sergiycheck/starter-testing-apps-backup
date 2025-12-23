const sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

export function findEvenIndex(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = sum(arr.slice(0, i));
    const rightSum = sum(arr.slice(i + 1, arr.length));

    if (leftSum == rightSum) return i;
  }

  return -1;
}