// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

function solution(list: number[]): string {
  let result: string[] = [];
  let i = 0;

  while (i < list.length) {
    let start = i;

    // Find the range of consecutive numbers
    while (i + 1 < list.length && list[i + 1] === list[i] + 1) {
      i++;
    }

    let end = i;

    // Check if it's a range of at least 3 numbers
    if (end - start >= 2) {
      result.push(`${list[start]}-${list[end]}`);
    }
    // If it's just two numbers, store them individually
    else if (end - start === 1) {
      result.push(`${list[start]}`, `${list[end]}`);
    }
    // Single number
    else {
      result.push(`${list[start]}`);
    }

    i++;
  }

  return result.join(',');
}

// console.log(
//   solution([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ])
// );

//"-6,-3-1,3-5,7-11,14,15,17-20"

solution([
  -63, -61, -59, -57, -55, -53, -52, -50, -49, -46, -43, -41, -38, -36, -34,
  -32, -30, -29, -26, -25, -24, -21, -19, -18, -16,
]);
