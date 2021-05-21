export const calculateBMI: (
  heightInCms: number,
  weightInKgs: number
) => number = (heightInCms: number, weightInKgs: number) => {
  return +(weightInKgs / (heightInCms * 0.01) ** 2).toFixed(1);
};
