import { getBMICategories } from "../../../src";
import { weightConfigurations } from "../../../weightConfigurations";

describe("GetBMICategories Test Suite", () => {
  it("should return all BMI weight Categories", () => {
    expect(getBMICategories()).toMatchObject(Object.keys(weightConfigurations));
  });
});
