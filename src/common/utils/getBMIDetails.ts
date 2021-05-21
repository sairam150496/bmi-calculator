import { weightConfigurations } from "../../../weightConfigurations";

const configurations = Object.keys(weightConfigurations);

export const getBMICategories: () => string[] = () => {
  return configurations;
};
