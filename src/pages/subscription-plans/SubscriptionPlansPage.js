import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row } from "react-bootstrap";
import useActivePlan from "../../hooks/useActivePlan";
import { useHistory } from "react-router-dom";
import { Chip } from "@mantine/core";
import GreenTick from "../../assets/green-tick.png";

export default function SubscriptionPlansPage() {
  const history = useHistory();
  const { loading: currentlyActivePlanLoading, currentlyActivePlans } =
    useActivePlan();

  console.log(currentlyActivePlans);
  const [allProjectPlans, setAllProjectPlans] = useState([]);
  const [allBudgetPlans, setAllBudgetPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const choosePlan = async (plan) => {
    if (plan?.plan_type === "budget") {
      history.push(`/payment/budget`);
    } else {
      history.push(`/payment/${plan?.name}/${plan?.id}`);
    }
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
        setLoading(false);
        const projectPlans = response?.data?.data?.filter(
          (p) => p?.plan_type === "project"
        );
        const budgetPlans = response?.data?.data?.filter(
          (p) => p?.plan_type === "budget"
        );
        setAllProjectPlans(projectPlans);
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
            Packages
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
              {!loading &&
                allProjectPlans?.map((plan) => (
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
                          <span style={{ fontWeight: "bold" }}>Price</span>: $
                          {plan?.price}
                        </p>

                        {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                        {plan?.plan_type !== "budget" && (
                          <p style={{ fontWeight: "bold" }}>
                            Max project with budget: {plan?.max_projects}
                          </p>
                        )}
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
