export const weightConfigurations = {
  underWeight: {
    minBMI: 0,
    maxBMI: 18.4,
    healthRisk: "Malnutrition",
    weightCategory: "Under weight",
  },
  normalWeight: {
    minBMI: 18.5,
    maxBMI: 24.9,
    healthRisk: "Low",
    weightCategory: "Normal weight",
  },
  overWeight: {
    minBMI: 25,
    maxBMI: 29.9,
    healthRisk: "Enhansed",
    weightCategory: "Over weight",
  },
  moderatelyObase: {
    minBMI: 30,
    maxBMI: 34.9,
    healthRisk: "Medium",
    weightCategory: "Moderately obase",
  },
  severelyObase: {
    minBMI: 35,
    maxBMI: 39.9,
    healthRisk: "High",
    weightCategory: "Severely obase",
  },
  verySeverelyObase: {
    minBMI: 40,
    maxBMI: 100000,
    healthRisk: "Very High",
    weightCategory: "Very Severely obase",
  },
};
