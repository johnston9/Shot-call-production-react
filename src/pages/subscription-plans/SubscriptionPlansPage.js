import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import useActivePlan from "../../hooks/useActivePlan";
import { useHistory } from "react-router-dom";
import { Chip } from "@mantine/core";
import GreenTick from "../../assets/green-tick.png";
import { toast } from "react-hot-toast";
import styles from "../../styles/Account.module.css";
import InfoSub from "./InfoSub";

export default function SubscriptionPlansPage() {
  const history = useHistory();
  const [showImp, setShowImp] = useState(false);
  const {
    loading: currentlyActivePlanLoading,
    currentlyActivePlans,
    fetchMyActivePlan,
  } = useActivePlan();


  const [allCompanyPlans, setAllCompanyPlans] = useState([]);
  const [allStudPlans, setAllStudPlans] = useState([]);
  const [allBudgetPlans, setAllBudgetPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState('project')
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseDelete = () => {
    handleCancelSubscription();
    setShow(false);
  };
  const handleShow = (type) => {
    setShow(true);
    setType(type)
  }

  const choosePlan = async (plan) => {
    // console.log(plan);
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
    // console.log("isTrail", subPlan);
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
          trailEndDate: subPlan?.current_period_end,
        };
      }
    }
  };

  const handleCancelSubscription = async () => {
    // fetch subscription id
    const projectPlan = currentlyActivePlans?.find(
      (activePlan) => activePlan?.plan?.plan_type === "project" || "budget"
    );

    if (!projectPlan) {
      return toast.error("No plan is active yet!");
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
      (p) => p?.plan?.plan_type === "project" || "budget"
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
        // console.log(response?.data?.data);
        setLoading(false);
        const projectCatergories = response?.data?.data?.filter(
          (p) => p?.category?.name !== "Budget Only"
        );

        const companyCategory = projectCatergories?.find(
          (p) => p.category.name === "Company"
        );
        const companyPlans = companyCategory?.plans;
        // console.log("company plans", companyPlans);
        setAllCompanyPlans(companyPlans);
        const studCategory = projectCatergories?.find(
          (p) => p.category.name === "Student"
        );
        const studPlans = studCategory?.plans;
        // console.log("stud plans", studPlans);
        setAllStudPlans(studPlans);

        const budgetCatergory = response?.data?.data?.filter(
          (p) => p?.category?.name === "Budget Only"
        );
        const budgetPlans = budgetCatergory[0]?.plans;
        // console.log("budget plans", budgetPlans);
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

  // console.log(allCompanyPlans);
  // console.log(allStudPlans);

  return (
    <div className="pb-2 px-3">
      <h3
        className="text-center py-4 w-100 mt-2"
        style={{
          // background: "#3B444A",
          background: "#39606e",
          color: "#F5F5F5",
          // fontFamily: "Playfair Display",
          textTransform: "uppercase",
        }}
      >
        Subscription Plans
      </h3>
      {/* back button */}
      <Row className="mt-1">
        <Col xs={6} className="">
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
          >
            Back
        </Button>
        </Col>
        <Col xs={6} >
        <Button
          className={`float-right px-5 ${btnStyles.Button} ${btnStyles.Order}`}
          onClick={() => setShowImp(showImp => !showImp)}
        >INFO
        </Button>
        </Col>
      </Row>
      {!showImp ? (
          ""
              ) : (
                <InfoSub  /> 
      ) } 
      {/* <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "1rem",
        }}
      > */}
      <div>
        {/* <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        ></Row> */}
        <Row style={{gap: "2rem",}}>
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
              <Row>
              <Col md={{span: 8, offset: 2}} className={`text-center`} >
              <p className={`${styles.InfoTextI}`}>
              Buy a "Platform Project with Budget" Subscription Plan here, buy a "Budget Only" Subscription Plan below.
              </p>
              <p className={`${styles.InfoTextI}`}>
              Then create Projects and Budgets on the Account page page.
              </p>
               <p className={`${styles.InfoTextI}`}>
              The Company plans is for Film or TV projects with over 100 Users or Video projects 
              with over 25 Users.
              </p>
              <p className={`${styles.InfoTextI}`}>
              The Indie/Student plan is for Film or TV projects with under 100 Users or Video projects 
              with under 25 Users.
              </p>
              <p className={`${styles.InfoTextI}`}>
              The Video platforms are intended for Commercial work, Music Videos or Short films.
              </p>
              </Col>
              </Row>
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="px-2 pb-4 text-center"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Company Platform Project with Budget Plans
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
                            border: `${currentlyActivePlans?.find(
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

                            {/* {!currentlyActivePlans?.find(
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
                            )} */}

                            {(() => {
                              const activePlan = currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              );
                              // 1. Show message if plan is cancelled but still usable
                              if (activePlan?.auto_renewal === false) {
                                return (
                                  <p className="card-absolute-btn" style={{ color: "orange", fontWeight: "bold", fontSize: '13px' }}>
                                    Your subscription is cancelled, but you can use the service until{" "}
                                    {activePlan?.current_period_end}
                                  </p>
                                );
                              }

                              // 2. Show Cancel button if plan is inactive (edge case)
                              if (activePlan?.is_active === false) {
                                return (
                                  <Button
                                    className="card-absolute-btn"
                                    style={{
                                      cursor: "pointer",
                                      backgroundColor: "red",
                                    }}
                                    onClick={() => handleShow('projects')}
                                    disabled={isCancelling}
                                  >
                                    Cancel Subscription
                                  </Button>
                                );
                              }

                              // 3. If no active plan, show Buy/Upgrade logic
                              if (!activePlan) {
                                const hasProjectPlan = currentlyActivePlans?.find(
                                  (p) => p?.plan?.plan_type === "project"
                                );

                                return !hasProjectPlan ? (
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
                                    {enabledBuy(plan) ? "Upgrade" : "Unavailable"}
                                  </Button>
                                );
                              }

                              // 4. Default case: show Cancel button
                              return (
                                <Button
                                  className="card-absolute-btn"
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                  }}
                                  onClick={() => handleShow('projects')}
                                  disabled={isCancelling}
                                >
                                  Cancel Subscription
                                </Button>
                              );
                            })()}

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Confirm Cancel Subscription
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure you want to cancel your
                                subscription? Once canceled, you will no longer
                                have access to your {type} after the current payment period is up.
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
                  Indie/Student Projects with Budgets Plans
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
                            border: `${currentlyActivePlans?.find(
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

                            {/* {!currentlyActivePlans?.find(
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
                            )} */}

                            {(() => {
                              const activePlan = currentlyActivePlans?.find(
                                (p) => p?.plan?.id === plan?.id
                              );
                              //  1. Show cancellation message if auto_renewal is false
                              if (activePlan?.auto_renewal === true) {
                                return (
                                  <Button
                                    className="card-absolute-btn"
                                    style={{
                                      cursor: "pointer",
                                      backgroundColor: "red",
                                    }}
                                    onClick={() => handleShow('projects')}
                                    disabled={isCancelling}
                                  >
                                    Cancel Subscription
                                  </Button>
                                );
                              }

                              // 2. Show cancel button if plan is inactive
                              if (activePlan?.auto_renewal === false) {
                                return (
                                  <p className="card-absolute-btn" style={{ color: "orange", fontWeight: "bold", fontSize: '13px' }}>
                                    Your subscription is cancelled but you can use the service until{" "}
                                    {activePlan?.current_period_end}
                                  </p>
                                );
                              }

                              //  3. No active plan — Buy / Upgrade / Unavailable flow
                              if (!activePlan) {
                                const hasProjectPlan = currentlyActivePlans?.find(
                                  (p) => p?.plan?.plan_type === "project"
                                );

                                return !hasProjectPlan ? (
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
                                    {enabledBuy(plan) ? "Upgrade" : "Unavailable"}
                                  </Button>
                                );
                              }

                              //  4. Default active plan — Show cancel button
                              return (
                                <Button
                                  className="card-absolute-btn"
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                  }}
                                  onClick={() => handleShow('projects')}
                                  disabled={isCancelling}
                                >
                                  Cancel Subscription
                                </Button>
                              );
                            })()}

                          </div>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </div>
            </div>
          </Col>
          {/* BUDGET PLANS */}
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
                Budget Only Subscription Plans
              </h3>
              <Row className="justify-content-center">
                {!loading &&
                  allBudgetPlans?.map((plan) => (
                    <Col key={plan?.id} xs={12} md={3} className="mt-3">
                      <Card
                        style={{
                          padding: "2rem",
                          height: "370px",
                          border: `${currentlyActivePlans?.find(
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
                          {plan?.description && <div
                            style={{
                              display: "flex",
                              gap: "0.5rem",
                            }}
                          >
                            <img src={GreenTick} height={20} width={20} alt="check" />

                            <p>{plan?.description}</p>
                          </div>}
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>Price</span>: $
                            {plan?.price}
                          </p>
                          {/* <p>Plan Id: {plan?.stripe_plan_id}</p> */}
                          {/* {plan?.plan_type !== "budget" && ( */}


                          <p className="mb-0" style={{ fontWeight: "bold" }}>
                            Max budget: {plan?.max_projects}
                          </p>


                          {findDates(plan)?.startDate && (
                            <p className="mb-0">
                              <span style={{ fontWeight: "bold" }}>
                                Start Date
                              </span>
                              : {findDates(plan)?.startDate}
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
                          <p className="mb-0">
                            <span style={{ fontWeight: "bold" }}>
                              Interval
                            </span>
                            : {plan?.interval}
                          </p>
                          {/* {!currentlyActivePlans?.find(
                              (p) => p?.auto_renewal === plan?.auto_renewal
                            ) ? (
                              <>
                                
                                  <Button
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      choosePlan(plan);
                                    }}
                                  >
                                    Buy
                                  </Button>

 
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
                                Cancel Budget
                              </Button>
                            )} */}

                          {/* {(() => {
                            const activePlan = currentlyActivePlans?.find(
                              (p) => p?.plan?.id === plan?.id
                            );
                            if (activePlan?.auto_renewal === false) {
                              return (
                                <p style={{ color: "orange", fontWeight: "bold" }}>
                                  Your budget is cancelled, but you can use the service until{" "}
                                  {activePlan?.current_period_end}
                                </p>
                              );
                            }

                            if (activePlan?.is_active === false) {
                              return (
                                <Button
                                  className="card-absolute-btn"
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                  }}
                                  onClick={handleShow}
                                  disabled={isCancelling}
                                >
                                  Cancel Budget
                                </Button>
                              );
                            }

                            if (!activePlan) {
                              return (
                                <Button
                                className="card-absolute-btn"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => choosePlan(plan)}
                                >
                                  Buy
                                </Button>
                              );
                            }

                            return (
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
                            );
                          })()} */}

                          {(() => {
                            const activePlan = currentlyActivePlans?.find(
                              (p) => p?.plan?.id === plan?.id
                            );

                            const hasProjectPlan = currentlyActivePlans?.find(
                              (p) => p?.plan?.plan_type === "budget"
                            );

                            // 1. Show notice if auto_renewal is false
                            if (activePlan?.auto_renewal === false) {
                              return (
                                <p className="card-absolute-btn m-0 mt-3" style={{ color: "orange", fontWeight: "bold", fontSize: '13px' }}>
                                  Your subscription is cancelled, but you can use the service until{" "}
                                  {activePlan?.current_period_end}
                                </p>
                              );
                            }

                            // 2. Show cancel button if is_active is false
                            if (activePlan?.is_active === false) {
                              return (
                                <Button
                                  className="card-absolute-btn"
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor: "red",
                                  }}
                                  onClick={() => handleShow('budgets')}
                                  disabled={isCancelling}
                                >
                                  Cancel Subscription
                                </Button>
                              );
                            }

                            // 3. No active budget plan — handle Buy / Upgrade / Unavailable
                            if (!activePlan) {
                              return !hasProjectPlan ? (
                                <Button
                                  className="card-absolute-btn"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => choosePlan(plan)}
                                >
                                  Buy
                                </Button>
                              ) : (
                                <Button
                                  className="card-absolute-btn"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    if (enabledBuy(plan)) choosePlan(plan);
                                  }}
                                  disabled={!enabledBuy(plan)}
                                >
                                  {enabledBuy(plan) ? "Upgrade" : "Unavailable"}
                                </Button>
                              );
                            }

                            // 4. Default case: user has an active budget plan
                            return (
                              <Button
                                className="card-absolute-btn"
                                style={{
                                  cursor: "pointer",
                                  backgroundColor: "red",
                                }}
                                onClick={() => handleShow('budgets')}
                                disabled={isCancelling}
                              >
                                Cancel Subscription
                              </Button>
                            );
                          })()}


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
