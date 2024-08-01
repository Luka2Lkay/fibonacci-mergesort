// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
//  and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortLeft = mergeSort(left);
  const sortRight = mergeSort(right);

  return combine(sortLeft, sortRight);
};

const combine = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
  
    if (left[leftIndex] < right[rightIndex]) {
        
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};

module.exports = { mergeSort };
