import { CalculateBMIToTheUsers } from "../../src";
import { userData } from "../../test_data";
import { weightConfigurations } from "../../weightConfigurations";

describe("CalculateBMIToTheUsers Test Suite", () => {
  it("should check if calculateBMIToUsers is initialized", () => {
    expect(new CalculateBMIToTheUsers(userData)).toBeTruthy();
  });

  it("should return user data", () => {
    expect(new CalculateBMIToTheUsers(userData).getUserData()).toMatchObject(
      userData
    );
  });

  it("should return BMI info ", () => {
    expect(new CalculateBMIToTheUsers(userData).getBmiInfo(29.4)).toMatchObject(
      weightConfigurations.overWeight
    );
  });

  it("should return user data", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();
    expect(bmiUserCalc.getUserData()).toHaveLength(
      Object.keys(weightConfigurations).length
    );
    bmiUserCalc.getUserData().map((bmiUserCalc) => {
      expect(Object.keys(bmiUserCalc).length).toBe(6);
      expect(
        Object.values(bmiUserCalc).every((bmiPorps) => bmiPorps)
      ).toBeTruthy();
    });
  });

  it("should return all under weighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();

    expect(bmiUserCalc.getUnderWeightedPeople()).toMatchObject([]);
  });

  it("should return all Over Weighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();

    expect(bmiUserCalc.getOverWeightedPeople()).toMatchObject([
      {
        BMI: 29.4,
        BMICategory: "Over weight",
        Gender: "Female",
        HealthCategory: "Enhansed",
        HeightCm: 167,
        WeightKg: 82,
      },
    ]);
  });
  it("should return all Normal Overweighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();

    expect(bmiUserCalc.getNormallyWeightedPeople()).toMatchObject([
      {
        BMI: 23.8,
        BMICategory: "Normal weight",
        Gender: "Male",
        HealthCategory: "Low",
        HeightCm: 180,
        WeightKg: 77,
      },
      {
        BMI: 22.5,
        BMICategory: "Normal weight",
        Gender: "Female",
        HealthCategory: "Low",
        HeightCm: 166,
        WeightKg: 62,
      },
    ]);
  });
  it("should return all Moderately Weighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();

    expect(bmiUserCalc.getModeratelyObasePeople()).toMatchObject([
      {
        BMI: 32.8,
        BMICategory: "Moderately obase",
        Gender: "Male",
        HealthCategory: "Medium",
        HeightCm: 171,
        WeightKg: 96,
      },
      {
        BMI: 32.8,
        BMICategory: "Moderately obase",
        Gender: "Male",
        HealthCategory: "Medium",
        HeightCm: 161,
        WeightKg: 85,
      },
      {
        BMI: 31.1,
        BMICategory: "Moderately obase",
        Gender: "Female",
        HealthCategory: "Medium",
        HeightCm: 150,
        WeightKg: 70,
      },
    ]);
  });
  it("should return all Severely Weighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();

    expect(bmiUserCalc.getSeverelyWeightedPeople()).toMatchObject([]);
  });
  it("should return all Very Severely Weighted people", () => {
    const bmiUserCalc = new CalculateBMIToTheUsers(userData);
    bmiUserCalc.updateBMIInfoToUsers();
    expect(bmiUserCalc.getVerySeverelyWeightedPeople()).toMatchObject([]);
  });
});
