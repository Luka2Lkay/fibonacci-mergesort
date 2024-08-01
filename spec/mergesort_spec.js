const { mergeSort } = require("../mergesort");

describe("mergeSort", () => {
  it("should return [0, 1, 1, 2, 3, 5, 8, 13], when the input is [3, 2, 1, 13, 8, 5, 0, 1]", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  it("should return [79, 100, 105, 110], when the input is [105, 79, 100, 110]", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
