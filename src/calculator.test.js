import { add, subtract, multiply, divide } from "./calculator";

describe("Calculator", () => {
  describe("Addition", () => {
    test("adds two numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    test("add two negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });
    test("add zero to a number", () => {
      expect(add(5, 0)).toBe(5);
    });
  });
  describe("Subtraction", () => {
    test("subtracts two numbers", () => {
      expect(subtract(5, 2)).toBe(3);
    });
    test("handle negative results", () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });
  describe("Multiplication and Division", () => {
    test("multiplies two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
    test("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });
  describe("Division", () => {
    test("divides two numbers", () => {
      expect(divide(6, 3)).toBe(2);
    });
    test("handle division by zero", () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });
});
