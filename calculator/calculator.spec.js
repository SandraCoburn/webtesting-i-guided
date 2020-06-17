const { add } = require("./calculator.js");
it("checks references", () => {
  expect({ a: 1 }).toEqual({ a: 1 });
  expect([1, 2]).toEqual([1, 2]);
  expect(NaN).toBeNaN();
});

// test away!
describe("calculator", () => {
  it("should run tests using it()", () => {
    //setup - Arrange
    //execution of SUT(System Under Test) - Act
    //assertions - Assert
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(true).not.toBeUndefined();
  });
  describe("add()", () => {
    test("Should add two numbers", () => {
      //set up - Arrange
      const expected = 4;
      const a = 2;
      const b = 2;
      //execution of SUT - Act
      const actual = add(a, b);
      //assertion - Assert
      expect(actual).toBe(expected);
    });
    it("should add two values", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(-2, 2)).toBe(0);
      expect(add(-2, 0)).toBe(-2);
    });
    it("should return  the value when given only one value", () => {
      const value = 0;
      expect(add(value, 2)).toBe(2);
      expect(add(undefined, 3)).toBe(3);
    });
    it("add three numbers", () => {
      expect(add(2, 3, 4)).toBe(9);
    });
    it("Unlimited numbers separated by comma", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(1, 2, 3)).toBe(6);
    });
    it("add an array of values", () => {
      expect(add([1, 2])).toBe(3);
    });
  });
});
