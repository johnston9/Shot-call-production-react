export function hasProjectPlan(plans) {
  return plans.some(
    (subscription) => subscription.plan.plan_type === "project"
  );
}
export function hasBudgetPlan(plans) {
  return plans.some((subscription) => subscription.plan.plan_type === "budget");
}
