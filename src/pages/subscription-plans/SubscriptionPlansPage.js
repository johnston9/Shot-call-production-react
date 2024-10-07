import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row } from "react-bootstrap";
import useActivePlan from "../../hooks/useActivePlan";
import { useHistory } from "react-router-dom";
import { Chip } from "@mantine/core";
import GreenTick from "../../assets/green-tick.png";
import { toast } from "react-hot-toast";

export default function SubscriptionPlansPage() {
  const history = useHistory();
  const {
    loading: currentlyActivePlanLoading,
    currentlyActivePlans,
    fetchMyActivePlan,
  } = useActivePlan();

  console.log(currentlyActivePlans);

  console.log(currentlyActivePlans);

  const [allCompanyPlans, setAllCompanyPlans] = useState([]);
  const [allStudPlans, setAllStudPlans] = useState([]);
  const [allBudgetPlans, setAllBudgetPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const choosePlan = async (plan) => {
    console.log(plan);
    // return;
    if (plan?.plan_type === "budget") {
      history.push(`/payment/budget`);
    } else {
      const encodedPlanName = encodeURIComponent(plan?.name);
      history.push(
        `/payment/${encodedPlanName}/${plan?.id}/${plan?.subscription_category?.id}`
      );
    }
  };

  const findStartedDate = (plan) => {
    if (!currentlyActivePlans || currentlyActivePlans?.length <= 0) {
      return null;
    }
    const subPlan = currentlyActivePlans?.find(
      (activePlan) => activePlan?.plan?.id === plan?.id
    );
    if (!subPlan) {
      return null;
    }
    return subPlan?.current_period_start;
  };

  const findEndDate = (plan) => {
    if (!currentlyActivePlans || currentlyActivePlans?.length <= 0) {
      return null;
    }
    const subPlan = currentlyActivePlans?.find(
      (activePlan) => activePlan?.plan?.id === plan?.id
    );
    if (!subPlan) {
      return null;
    }
    return subPlan?.current_period_end;
  };

  const handleCancelSubscription = async () => {
    // fetch subscription id
    const projectPlan = currentlyActivePlans?.find(
      (activePlan) => activePlan?.plan?.plan_type === "project"
    );

    if (!projectPlan) {
      return toast.error("No project plan is active yet!");
    }

    try {
      setIsCancelling(true);
      const response = await axiosInstance.post(
        `/cancel-subscription/`,
        {
          stripe_subscription_id: projectPlan?.stripe_subscription_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      if (response?.data?.status === 200) {
        setIsCancelling(false);
        fetchData();
        fetchMyActivePlan();
      }
    } catch (err) {
      setIsCancelling(false);
      console.log(err);
    }
  };

  const enabledBuy = (plan) => {
    if (currentlyActivePlans?.length <= 0) return true;
    const currentActivetProjectPlan = currentlyActivePlans?.find(
      (p) => p?.plan?.plan_type === "project"
    );
    if (
      currentActivetProjectPlan?.plan?.subscription_category?.name ===
        "Company" &&
      plan?.subscription_category?.name === "Student"
    ) {
      return false;
    }
    if (Number(currentActivetProjectPlan?.plan?.price) > Number(plan?.price)) {
      return false;
    }
    return true;
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/plans/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      if (response?.data?.status === 200) {
        console.log(response?.data?.data);
        setLoading(false);
        const projectCatergories = response?.data?.data?.filter(
          (p) => p?.category?.name !== "Budget Only"
        );

        const companyCategory = projectCatergories?.find(
          (p) => p.category.name === "Company"
        );
        const companyPlans = companyCategory?.plans;
        console.log("company plans", companyPlans);
        setAllCompanyPlans(companyPlans);
        const studCategory = projectCatergories?.find(
          (p) => p.category.name === "Student"
        );
        const studPlans = studCategory?.plans;
        console.log("stud plans", studPlans);
        setAllStudPlans(studPlans);

        const budgetCatergory = response?.data?.data?.filter(
          (p) => p?.category?.name === "Budget Only"
        );
        const budgetPlans = budgetCatergory[0]?.plans;
        console.log("budget plans", budgetPlans);
        // setAllProjectPlans(projectPlans);
        setAllBudgetPlans(budgetPlans);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(allCompanyPlans);
  console.log(allStudPlans);

  return (
    <div className="py-2">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              marginLeft: "1.2rem",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Subscription Plans
          </div>
        </Row>
        <Row
          style={{
            gap: "3rem",
          }}
        >
          <Col xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  marginLeft: "1.2rem",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Projects with Budgets
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    marginLeft: "1.2rem",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Plans for Company for Projects with Budgets
                </div>
                <Row>
                  {!loading &&
                    allCompanyPlans?.map((plan) => (
                      <Col key={plan?.id} xs={12} md={6}>
                        <Card
                          style={{
                            padding: "2rem",
                            height: "400px",
                            marginBottom: "1rem",
                            border: `${
                              currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              )
                                ? "1px solid green"
                                : ""
                            }`,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {/* {plan?.plan_type === "budget" && (
                        <h4>Pay for Budget</h4>
                      )} */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h4 style={{ fontWeight: "bold" }}>
                                {plan?.name}
                              </h4>
                              {currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              ) && (
                                <div
                                  style={{
                                    color: "green",
                                    fontWeight: "bold",
                                    // borderRadius: "20px",
                                    // border: "1px solid green",
                                    // padding: "0.3rem 0.8rem",
                                  }}
                                >
                                  Active
                                </div>
                              )}
                            </div>
                            {plan?.description && (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "0.5rem",
                                }}
                              >
                                <img src={GreenTick} height={20} width={20} />

                                <p>{plan?.description}</p>
                              </div>
                            )}
                            <p>
                              <span style={{ fontWeight: "bold" }}>Price</span>:
                              ${plan?.price}
                            </p>
                            {findStartedDate(plan) && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Start Date
                                </span>
                                : {findStartedDate(plan)}
                              </p>
                            )}
                            {findEndDate(plan) && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Renewal Date
                                </span>
                                : {findEndDate(plan)}
                              </p>
                            )}

                            {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                            {plan?.plan_type !== "budget" && (
                              <p style={{ fontWeight: "bold" }}>
                                Max project with budget: {plan?.max_projects}
                              </p>
                            )}
                            {plan?.interval && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Interval
                                </span>
                                : {plan?.interval}
                              </p>
                            )}

                            {!currentlyActivePlans?.find(
                              (p) => p?.plan?.id === plan?.id
                            ) ? (
                              <>
                                {!currentlyActivePlans?.find(
                                  (p) => p?.plan?.plan_type === "project"
                                ) ? (
                                  <Button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      choosePlan(plan);
                                    }}
                                  >
                                    Buy
                                  </Button>
                                ) : (
                                  <Button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      if (enabledBuy(plan)) {
                                        choosePlan(plan);
                                      }
                                    }}
                                    disabled={!enabledBuy(plan)}
                                  >
                                    {enabledBuy(plan)
                                      ? "Upgrade"
                                      : "Unavailable"}
                                  </Button>
                                )}
                              </>
                            ) : (
                              <Button
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "red",
                                }}
                                onClick={handleCancelSubscription}
                                disabled={isCancelling}
                              >
                                Cancel Subscription
                              </Button>
                            )}
                          </div>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    marginLeft: "1.2rem",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Plans for Indie/Student for Projects with Budgets
                </div>
                <Row>
                  {!loading &&
                    allStudPlans?.map((plan) => (
                      <Col key={plan?.id} xs={12} md={6}>
                        <Card
                          style={{
                            padding: "2rem",
                            height: "400px",
                            marginBottom: "1rem",
                            border: `${
                              currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              )
                                ? "1px solid green"
                                : ""
                            }`,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            {/* {plan?.plan_type === "budget" && (
                        <h4>Pay for Budget</h4>
                      )} */}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h4 style={{ fontWeight: "bold" }}>
                                {plan?.name}
                              </h4>
                              {currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              ) && (
                                <div
                                  style={{
                                    color: "green",
                                    fontWeight: "bold",
                                    // borderRadius: "20px",
                                    // border: "1px solid green",
                                    // padding: "0.3rem 0.8rem",
                                  }}
                                >
                                  Active
                                </div>
                              )}
                            </div>
                            {plan?.description && (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "0.5rem",
                                }}
                              >
                                <img src={GreenTick} height={20} width={20} />

                                <p>{plan?.description}</p>
                              </div>
                            )}
                            <p>
                              <span style={{ fontWeight: "bold" }}>Price</span>:
                              ${plan?.price}
                            </p>
                            {findStartedDate(plan) && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Start Date
                                </span>
                                : {findStartedDate(plan)}
                              </p>
                            )}
                            {findEndDate(plan) && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Renewal Date
                                </span>
                                : {findEndDate(plan)}
                              </p>
                            )}

                            {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                            {plan?.plan_type !== "budget" && (
                              <p style={{ fontWeight: "bold" }}>
                                Max project with budget: {plan?.max_projects}
                              </p>
                            )}
                            {plan?.interval && (
                              <p>
                                <span style={{ fontWeight: "bold" }}>
                                  Interval
                                </span>
                                : {plan?.interval}
                              </p>
                            )}

                            {!currentlyActivePlans?.find(
                              (p) => p?.plan?.id === plan?.id
                            ) ? (
                              <>
                                {!currentlyActivePlans?.find(
                                  (p) => p?.plan?.plan_type === "project"
                                ) ? (
                                  <Button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      choosePlan(plan);
                                    }}
                                  >
                                    Buy
                                  </Button>
                                ) : (
                                  <Button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      if (enabledBuy(plan)) {
                                        choosePlan(plan);
                                      }
                                    }}
                                    disabled={!enabledBuy(plan)}
                                  >
                                    {enabledBuy(plan)
                                      ? "Upgrade"
                                      : "Unavailable"}
                                  </Button>
                                )}
                              </>
                            ) : (
                              <Button
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "red",
                                }}
                                onClick={handleCancelSubscription}
                                disabled={isCancelling}
                              >
                                Cancel Subscription
                              </Button>
                            )}
                          </div>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  marginLeft: "1.2rem",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Budget Only
              </div>

              {!loading &&
                allBudgetPlans?.map((plan) => (
                  <Col key={plan?.id}>
                    <Card
                      style={{
                        padding: "2rem",
                        minHeight: "250px",
                        border: `${
                          currentlyActivePlans?.find(
                            (p) => p?.plan?.id === plan?.id
                          )
                            ? "1px solid green"
                            : ""
                        }`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        {/* {plan?.plan_type === "budget" && (
                          <h4>Pay for Budget</h4>
                        )} */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h4 style={{ fontWeight: "bold" }}>{plan?.name}</h4>
                          {currentlyActivePlans?.find(
                            (p) => p?.plan?.id === plan?.id
                          ) && (
                            <div
                              style={{
                                color: "green",
                                fontWeight: "bold",
                                borderRadius: "20px",
                                border: "1px solid green",
                                padding: "0.3rem 0.8rem",
                              }}
                            >
                              Active
                            </div>
                          )}
                        </div>
                        {plan?.description && <p>{plan?.description}</p>}
                        <p>
                          <span style={{ fontWeight: "bold" }}>Price</span>: $
                          {plan?.price}
                        </p>
                        {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                        {plan?.plan_type !== "budget" && (
                          <p style={{ fontWeight: "bold" }}>
                            Max project with budget: {plan?.max_projects}
                          </p>
                        )}
                        <p style={{ fontWeight: "bold" }}>
                          Can create only 1 budget
                        </p>
                        {plan?.interval && (
                          <p>
                            <span style={{ fontWeight: "bold" }}>Interval</span>
                            : {plan?.interval}
                          </p>
                        )}

                        {!currentlyActivePlans?.find(
                          (p) => p?.plan?.id === plan?.id
                        ) && (
                          <Button
                            style={{ cursor: "pointer" }}
                            onClick={() => choosePlan(plan)}
                          >
                            Buy
                          </Button>
                        )}
                      </div>
                    </Card>
                  </Col>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
