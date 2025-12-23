const A = [1,4,5,11,23,132]
const B = [0,1,2,4,10,12,23,133312, 2132123]

// - sorted
// - unique per array
// find common elements

export function findCommonElements(arr1: number[], arr2: number[]){
  let i = 0;
  let j = 0;
  const common = [];
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] == arr2[j]){
      common.push(arr1[i])
      i++;
      j++
    }else if(arr1[i] < arr2[j]){
      i++
    }else {
      j++
    }
  }
  return common;
}

