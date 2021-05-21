import { getBMICategoryMaxValues } from "../common";
import { calculateBMI } from "../common/utils";
import { weightConfigurations } from "../../weightConfigurations";
import { getBMICategories } from "../common/utils/getBMIDetails";
import { IBMIMetrics } from "../common/interfaces";
import { BMICategories } from "../common/enums";
import { IUserData } from "../common/interfaces/IUserData";
import { IUserInfo } from "../common/interfaces/IUserInfo";

export class CalculateBMIToTheUsers {
  private userInfo: IUserData[];
  private bmiMaxCategoryValues: number[];
  private bmiCategories: string[];

  constructor(data: IUserData[]) {
    this.userInfo = data;
    this.bmiMaxCategoryValues = getBMICategoryMaxValues();
    this.bmiCategories = getBMICategories();
  }
  public getUserData() {
    return this.userInfo;
  }
  public getBmiInfo: (bmiValue: number) => IBMIMetrics = (bmiValue: number) => {
    let bmiInfo: IBMIMetrics = {} as any;

    for (let i = 0; this.bmiMaxCategoryValues.length; i++) {
      if (bmiValue <= this.bmiMaxCategoryValues[i]) {
        const category: string = this.bmiCategories[i];

        bmiInfo = (weightConfigurations as any)[category] as IBMIMetrics;
        break;
      }
    }
    return bmiInfo;
  };

  public updateBMIInfoToUsers: () => void = () =>
    this.userInfo.map((userInfo: IUserInfo, index) => {
      const bmi = calculateBMI(userInfo.HeightCm, userInfo.WeightKg);
      console.log("BMI", bmi);
      const bmiInfo: IBMIMetrics = this.getBmiInfo(bmi);
      this.userInfo[index] = {
        ...userInfo,
        BMI: bmi,
        BMICategory: bmiInfo.weightCategory,
        HealthCategory: bmiInfo.healthRisk,
      };
    });

  public getOverWeightedPeople = () => {
    return this.userInfo.filter(
      (user: IUserData) => user.BMICategory === BMICategories.OVER_WEIGHT
    );
  };
  public getModeratelyObasePeople = () => {
    return this.userInfo.filter(
      (user: IUserData) => user.BMICategory === BMICategories.MODERATELY_OBASE
    );
  };
  public getNormallyWeightedPeople = () => {
    return this.userInfo.filter(
      (user: IUserData) => user.BMICategory === BMICategories.NORMAL_WEIGHT
    );
  };
  public getSeverelyWeightedPeople = () => {
    return this.userInfo.filter(
      (user: IUserData) => user.BMICategory === BMICategories.SEVERELY_OBASE
    );
  };
  public getVerySeverelyWeightedPeople = () => {
    return this.userInfo.filter(
      (user: IUserData) =>
        user.BMICategory === BMICategories.VERY_SEVERELY_OBASE
    );
  };
  public getUnderWeightedPeople = () => {
    return this.userInfo.filter(
      (user: IUserData) => user.BMICategory === BMICategories.UNDER_WEIGHT
    );
  };
}
