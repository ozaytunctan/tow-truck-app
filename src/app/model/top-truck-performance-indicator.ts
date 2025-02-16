interface TopTruckPerformanceIndicator {
  details: string;
  average: string;
  performance: string;
}

const TOP_TRUCK_PERFORMANCE_INDICATORS: TopTruckPerformanceIndicator[] = [
  {
    details: "Availability",
    average: "42 miles",
    performance: "↑",
  },
  {
    details: "Add truck",
    average: "18 miles",
    performance: "↓",
  },
  {
    details: "Maintenance",
    average: "35:miles",
    performance: "↑",
  },
  {
    details: "Mechanical issue",
    average: "15 miles",
    performance: "↓",
  },
];

export {TOP_TRUCK_PERFORMANCE_INDICATORS, TopTruckPerformanceIndicator};
