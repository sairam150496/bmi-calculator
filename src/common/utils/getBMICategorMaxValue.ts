import { weightConfigurations } from "../../../weightConfigurations";

export const getBMICategoryMaxValues = () => {
  return Object.values(weightConfigurations).map(
    (weights: any) => weights.maxBMI
  );
};
