import { IUserInfo } from "./IUserInfo";

export interface IUserData extends IUserInfo {
  BMI?: number;
  BMICategory?: string;
  HealthCategory?: string;
}
