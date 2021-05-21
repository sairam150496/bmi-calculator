import { calculateBMI } from "../../../src";

describe("CalculateBMI Test Suite", () => {
  it("should should calculate BMI for the height and width", () => {
    expect(calculateBMI(167, 82)).toBe(29.4);
  });
});
