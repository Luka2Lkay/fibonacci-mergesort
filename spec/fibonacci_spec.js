const { fib, fibsRec } = require("../fibonacci");

describe("fib", () => {
  it("should return [0, 1, 1, 2, 3, 5, 8, 13] when the input is 8", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("should return [0, 1,  1,  2,  3, 5, 8, 13, 21, 34] when the input 10", () => {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it("should return [0,1] when the input is 2 or less", () => {
    expect(fib(2)).toEqual([0, 1]);
    expect(fib(1)).toEqual([0, 1]);
    expect(fib(0)).toEqual([0, 1]);
    expect(fib(-1)).toEqual([0, 1]);
  });
});

describe("fibsRec", () => {
  it("should return [0, 1, 1, 2, 3, 5, 8, 13] when the input is 8", () => {
    expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it("should return [0, 1,  1,  2,  3, 5, 8, 13, 21, 34] when the input 10", () => {
    expect(fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it("should return [] when the input is 0 or less", () => {
    expect(fibsRec(0)).toEqual([]);
    expect(fibsRec(-5)).toEqual([]);
  });

  it("should return [0] when the input is 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  it("should return [0, 1] when the input is 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });
});
