import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Button, Card, Col, Row } from "react-bootstrap";
import useActivePlan from "../../hooks/useActivePlan";

export default function SubscriptionPlansPage() {
  const { loading: currentlyActivePlanLoading, currentlyActivePlan } =
    useActivePlan();
  const [allPlans, setAllPlans] = useState([]);
  const [loading, setLoading] = useState(false);
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
            !currentlyActivePlanLoading &&
            allPlans?.map((plan) => (
              <Col key={plan?.id}>
                <Card
                  style={{
                    padding: "2rem",
                    minHeight: "250px",
                    border: `${
                      currentlyActivePlan?.plan?.id === plan?.id
                        ? "1px solid green"
                        : ""
                    }`,
                  }}
                >
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <h4 style={{ fontWeight: "bold" }}>{plan?.name}</h4>
                    {plan?.description && <p>{plan?.description}</p>}
                    <p>
                      <span style={{ fontWeight: "bold" }}>Price</span>: $
                      {plan?.price}
                    </p>
                    <p>Plan Id: {plan?.stripe_plan_id}</p>

                    {currentlyActivePlan?.plan?.id !== plan?.id && (
                      <Button style={{ cursor: "pointer" }}>Buy</Button>
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
