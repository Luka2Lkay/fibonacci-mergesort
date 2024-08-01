// Using iteration, write a function fibs which takes a number and
// returns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fib = (number) => {
  const arr = [0, 1];

  for (let i = 2; i < number; i++) {
    const nextNumber = arr[i - 1] + arr[i - 2];

    arr.push(nextNumber);
  }

  return arr;
};

// Now write another function fibsRec which solves the same problem recursively.

const fibsRec = (number) => {
  let arr = [];
  switch (true) {
    case number <= 0:
      arr = [];
      break;

    case number === 1:
      arr = [0];
      break;
    case number === 2:
      arr = [0, 1];
      break;
    case number > 2:
      const previousArr = fibsRec(number - 1);
      const nextNumber =
        previousArr[previousArr.length - 1] +
        previousArr[previousArr.length - 2];

      arr = [...previousArr, nextNumber];
      break;
  }

  return arr;
};

module.exports = { fib, fibsRec };
