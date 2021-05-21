import { HealthRisks } from "../enums";

export interface IBMIMetrics {
  min: number;
  max: number;
  healthRisk: HealthRisks;
  weightCategory: string;
}
