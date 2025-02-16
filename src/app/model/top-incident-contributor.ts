interface TopIncidentContributor {
  issue: string;
  incident_count: number;
  contribution: number | string; // Yüzde cinsinden
}

const TOP_INCIDENT_CONTRIBUTORS: TopIncidentContributor[] = [
  {
    issue: "Engine failure",
    incident_count: 942,
    contribution: "48%",
  },
  {
    issue: "Accidents",
    incident_count: 491,
    contribution: "32%",
  },
  {
    issue: "Traffic violations",
    incident_count: 502,
    contribution: "21%",
  },
  {
    issue: "Delayed",
    incident_count: 394,
    contribution: "33%",
  },
];

export {TopIncidentContributor, TOP_INCIDENT_CONTRIBUTORS};
