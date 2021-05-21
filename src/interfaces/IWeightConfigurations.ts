import { IBMIMetrics } from "../common/interfaces";

export interface IWeightConfigurations {
  underWeight: IBMIMetrics;
  normalWeight: IBMIMetrics;
  overWeight: IBMIMetrics;
  moderatelyObase: IBMIMetrics;
  severelyObase: IBMIMetrics;
  verySeverelyObase: IBMIMetrics;
}
