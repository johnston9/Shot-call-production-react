import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseDelete = () => {
    handleCancelSubscription();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const choosePlan = async (plan) => {
    console.log(plan);
    // return;
    if (plan?.plan_type === "budget") {
      history.push(`/payment/budget/${plan?.id}`);
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

  const findDates = (plan) => {
    if (!currentlyActivePlans || currentlyActivePlans?.length <= 0) {
      return null;
    }
    const subPlan = currentlyActivePlans?.find(
      (activePlan) => activePlan?.plan?.id === plan?.id
    );
    if (!subPlan) {
      return null;
    }
    console.log("isTrail", subPlan);
    if (subPlan?.plan?.plan_type === "project") {
      if (subPlan?.inTrial) {
        return {
          startDate: subPlan?.created_at,
          trailEndDate: subPlan?.current_period_end,
        };
      } else {
        return {
          startDate: subPlan?.current_period_start,
          renewalDate: subPlan?.current_period_end,
        };
      }
    } else {
      if (subPlan?.inTrial) {
        return {
          startDate: subPlan?.created_at,
          trailEndDate: subPlan?.current_period_end,
        };
      } else {
        return {
          startDate: subPlan?.current_period_start,
        };
      }
    }
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
    <div className="pb-2">
      <h2
        className="text-center py-4 w-100 mt-2"
        style={{
          background: "#3B444A",
          color: "#F5F5F5",
          fontFamily: "Playfair Display",
          textTransform: "uppercase",
        }}
      >
        Subscription Plans
      </h2>
      <div
        style={{
          maxWidth: "1400px",
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
        ></Row>
        <Row
          style={{
            gap: "2rem",
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
              {/* <div
                style={{
                  marginLeft: "1.2rem",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Projects with Budgets
              </div> */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="px-2 pb-4 text-center"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Plans for Company for Projects with Budgets
                </h3>
                <Row className="justify-content-center">
                  {!loading &&
                    allCompanyPlans?.map((plan) => (
                      <Col key={plan?.id} xs={12} md={3}>
                        <Card
                          style={{
                            padding: "2rem",
                            height: "370px",
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
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    background: "#2bb673",
                                    borderRadius: "20px",
                                    height: "26px",
                                    width: "75px",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>Price</span>:
                              ${plan?.price}
                            </p>
                            {findDates(plan)?.startDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Start Date
                                </span>
                                : {findDates(plan)?.startDate}
                              </p>
                            )}
                            {findDates(plan)?.renewalDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Renewal Date
                                </span>
                                : {findDates(plan)?.renewalDate}
                              </p>
                            )}
                            {findDates(plan)?.trailEndDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Trail End Date
                                </span>
                                : {findDates(plan)?.trailEndDate}
                              </p>
                            )}

                            {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                            {plan?.plan_type !== "budget" && (
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Max project with budget: {plan?.max_projects}
                              </p>
                            )}
                            {plan?.interval && (
                              <p className="mb-0">
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
                                    className="card-absolute-btn"
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
                                className="card-absolute-btn"
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "red",
                                }}
                                onClick={handleShow}
                                disabled={isCancelling}
                              >
                                Cancel Subscription
                              </Button>
                            )}
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Confirm Cancel Subscription
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure you want to cancel your
                                subscription? Once canceled, you will no longer
                                have access to your projects.
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  NO
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={handleCloseDelete}
                                >
                                  YES
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="px-2 py-4 text-center"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Plans for Indie/Student for Projects with Budgets
                </h3>
                <Row className="justify-content-center">
                  {!loading &&
                    allStudPlans?.map((plan) => (
                      <Col key={plan?.id} xs={12} md={3}>
                        <Card
                          style={{
                            padding: "2rem",
                            height: "370px",
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
                                    fontWeight: "bold",
                                    color: "#ffffff",
                                    background: "#2bb673",
                                    borderRadius: "20px",
                                    height: "26px",
                                    width: "75px",
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>Price</span>:
                              ${plan?.price}
                            </p>
                            {findDates(plan)?.startDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Start Date
                                </span>
                                : {findDates(plan)?.startDate}
                              </p>
                            )}
                            {findDates(plan)?.renewalDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Renewal Date
                                </span>
                                : {findDates(plan)?.renewalDate}
                              </p>
                            )}
                            {findDates(plan)?.trailEndDate && (
                              <p className="mb-0">
                                <span style={{ fontWeight: "bold" }}>
                                  Trail End Date
                                </span>
                                : {findDates(plan)?.trailEndDate}
                              </p>
                            )}

                            {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                            {plan?.plan_type !== "budget" && (
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Max project with budget: {plan?.max_projects}
                              </p>
                            )}
                            {plan?.interval && (
                              <p className="mb-0">
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
                                    className="card-absolute-btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      choosePlan(plan);
                                    }}
                                  >
                                    Buy
                                  </Button>
                                ) : (
                                  <Button
                                    className="card-absolute-btn"
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
                                className="card-absolute-btn"
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "red",
                                }}
                                onClick={handleShow}
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
              <h3
                className="px-2 pb-4 text-center"
                style={{
                  fontWeight: "bold",
                }}
              >
                Budget Only
              </h3>
              <Row className="justify-content-center">
                {!loading &&
                  allBudgetPlans?.map((plan) => (
                    <Col key={plan?.id} xs={12} md={3}>
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
                                  fontWeight: "bold",
                                  color: "#ffffff",
                                  background: "#2bb673",
                                  borderRadius: "20px",
                                  height: "26px",
                                  width: "75px",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Active
                              </div>
                            )}
                          </div>
                          {plan?.description && <p>{plan?.description}</p>}
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>Price</span>: $
                            {plan?.price}
                          </p>
                          {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                          {plan?.plan_type !== "budget" && (
                            <p className="mb-0" style={{ fontWeight: "bold" }}>
                              Max project with budget: {plan?.max_projects}
                            </p>
                          )}
                          <p className="mb-0" style={{ fontWeight: "bold" }}>
                            Can create only 1 budget
                          </p>
                          {findDates(plan)?.startDate && (
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>
                                Start Date
                              </span>
                              : {findDates(plan)?.startDate}
                            </p>
                          )}
                          {findDates(plan)?.renewalDate && (
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>
                                Renewal Date
                              </span>
                              : {findDates(plan)?.renewalDate}
                            </p>
                          )}
                          {findDates(plan)?.trailEndDate && (
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>
                                Trail End Date
                              </span>
                              : {findDates(plan)?.trailEndDate}
                            </p>
                          )}
                          {/* {plan?.interval && (
                          <p>
                            <span style={{ fontWeight: "bold" }}>Interval</span>
                            : {plan?.interval}
                          </p>
                        )} */}

                          {!currentlyActivePlans?.find(
                            (p) => p?.plan?.id === plan?.id
                          ) && (
                            <Button
                              className="card-absolute-btn"
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
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
