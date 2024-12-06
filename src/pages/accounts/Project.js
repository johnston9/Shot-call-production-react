/* Component in the Projects Component to display a Project's data */
import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";
import { Badge as ManBadge } from "@mantine/core";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosInstance, axiosRes } from "../../api/axiosDefaults";
import { UniDropdown } from "../../components/UniDropDown";
import { hasBudgetPlan } from "../../utils/hasBudgetPlan";
import useActivePlan from "../../hooks/useActivePlan";
import { hasProjectPlan } from "../../utils/hasProjectPlan";

import styles from "../../styles/Account.module.css";

const Project = ({
  id,
  name,
  url,
  stripe_id,
  company,
  owner,
  shotcaller_url,
  category_type,
  payment,
  created_at,
  fetchData,
}) => {
  const currentUser = useCurrentUser();
  const { currentlyActivePlans } = useActivePlan();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/projects/edit/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/projects-detail/${id}`);
      console.log("delete");
      console.log(currentUser);
      fetchData();
      // /projects-detail/:projectId
    } catch (err) {
      console.log("failed to delete", err);
    }
  };
  return (
    <div>
      <Card className="mb-3">
        <Card.Body className={`${styles.ProTop} py-2`}>
          <Row className="d-flex align-items-center">
            <Col xs={2}></Col>
            <Col className="text-center" xs={8}>
              <h5
                style={{
                  fontWeight: "500",
                  color: "#fff",
                  textTransform: "capitalize",
                }}
                className="ml-1 ml-md-3"
              >
                {" "}
                {name}{" "}
              </h5>
            </Col>
            <Col
              xs={2}
              className="d-flex align-items-center justify-content-center"
            >
              {is_owner && (
                <UniDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  id={id}
                />
              )}
            </Col>
          </Row>
        </Card.Body>
        {/* end new */}
        <Card.Body className="py-0">
          {company && (
            <p
              style={{ fontStyle: "italic" }}
              className="mb-0 mt-2 pb-0 text-center"
            >
              {company}
            </p>
          )}
          <hr className="my-2" />
          {/* <Card.Text>Project Id: {id}</Card.Text> */}
          {/* <Card.Text>Stripe Id: {stripe_id}</Card.Text> */}
          <Card.Text>
            Project URL:{" "}
            <a
              href={shotcaller_url}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noreferrer"
            >
              {shotcaller_url}
            </a>
          </Card.Text>
          <Card.Text className="d-flex">
            Project Type: <span className="ml-2 d-flex">{category_type}</span>
          </Card.Text>
          <Card.Text className="d-flex">
            Created On: <span className="ml-2 d-flex">{created_at}</span>
          </Card.Text>
          {/* <Card.Text className="d-flex">
            Amount: <span className="ml-2 d-flex">${payment?.amount}</span>
          </Card.Text> */}
          {/* <Card.Text className="d-flex">
            Payment Date: <span className="ml-2 d-flex">{created_at}</span>
          </Card.Text> */}
          {/* <Card.Text className="d-flex">
            Payment Status: <span className="ml-2 d-flex">Success</span>
          </Card.Text> */}
          {/* <Card.Text className="d-flex">
            Stripe Transaction Id:{" "}
            <span className="ml-2 d-flex">{payment?.stripe_id}</span>
          </Card.Text> */}
          <Row className="mt-1">
            <Col>
              <span
                onClick={() => {
                  if (
                    hasBudgetPlan(currentlyActivePlans) ||
                    hasProjectPlan(currentlyActivePlans)
                  ) {
                    history.push(`/${id}/budgets`);
                  } else {
                    toast.error(
                      "Cannot access budget. Please buy either budget or project subscription"
                    );
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <div className={`text-center`}>
                  <span className={`${styles.BudgetLink} px-md-5 mx-1`}>
                    Budget
                  </span>
                </div>
              </span>
            </Col>
          </Row>
        </Card.Body>
        <hr />
      </Card>
    </div>
  );
};

export default Project;
