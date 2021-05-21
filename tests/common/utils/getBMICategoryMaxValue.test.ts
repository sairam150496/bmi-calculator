import { getBMICategoryMaxValues } from "../../../src";
import { weightConfigurations } from "../../../weightConfigurations";

describe("GetBMICategoryMaxValues Test Suite", () => {
  it("should return all max weights of every weight category", () => {
    expect(getBMICategoryMaxValues()).toMatchObject(
      Object.values(weightConfigurations).map((weights: any) => weights.maxBMI)
    );
  });
});
