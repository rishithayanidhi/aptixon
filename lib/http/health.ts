export type HealthStatus = "healthy" | "degraded";

export function getHealthStatus(): {
  status: HealthStatus;
  service: "aptixon-web";
} {
  return {
    status: "healthy",
    service: "aptixon-web",
  };
}
