import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row } from "react-bootstrap";
import useActivePlan from "../../hooks/useActivePlan";
import { useHistory } from "react-router-dom";
import { Chip } from "@mantine/core";

export default function SubscriptionPlansPage() {
  const history = useHistory();
  const { loading: currentlyActivePlanLoading, currentlyActivePlans } =
    useActivePlan();

  console.log(currentlyActivePlans);
  const [allPlans, setAllPlans] = useState([]);
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
        setAllPlans(response?.data?.data?.results);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(allPlans);
  return (
    <div className="py-2">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <Row style={{ gap: "1rem" }}>
          {!loading &&
            allPlans?.map((plan) => (
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
                    style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {plan?.plan_type === "budget" && <h4>Pay for Budget</h4>}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4 style={{ fontWeight: "bold" }}>{plan?.name}</h4>
                      {currentlyActivePlans?.find(
                        (p) => p?.plan?.id === plan?.id
                      ) && <Chip>Active</Chip>}
                    </div>
                    {plan?.description && <p>{plan?.description}</p>}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Price</span>: $
                      {plan?.price}
                    </p>
                    <p>Plan Id: {plan?.stripe_plan_id}</p>
                    {plan?.plan_type !== "budget" && (
                      <p>Max project: {plan?.max_projects}</p>
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
        </Row>
      </div>
    </div>
  );
}
