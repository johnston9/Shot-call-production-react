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

const BudgetCard = ({
  id,
  is_deleted,
  owner,
  is_owner,
  title,
  series,
  location,
  dated,
  prodco,
  format,
}) => {

  

  const history = useHistory();

  const handleEdit = () => {
    // history.push(`/projects/edit/${id}`);
    history.push(`/${id}/my-budgets`);
  };

  // const handleDelete = async () => {
  //   try {
  //     await axiosInstance.delete(`/projects-detail/${id}`);
  //     // refetch data if needed
  //   } catch (err) {
  //     console.log("failed to delete", err);
  //   }
  // };

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
                {title ?? "--"}
              </h5>
            </Col>
            <Col
              xs={2}
              className="d-flex align-items-center justify-content-center"
            >
              {is_owner && (
                // <UniDropdown
                //   handleEdit={handleEdit}
                //   // handleDelete={handleDelete}
                //   id={id}
                // /><

                <button onClick={handleEdit} className="btn btn-info-outline btn-sm"> <i className="fa fa-pen text-light"></i> </button>
              )}
            </Col>
          </Row>
        </Card.Body>

        <Card.Body className="py-0">
          <hr className="my-2" />
          <Card.Text className="d-flex">
          Budget Owner: <span className="ml-2">{owner || "—"}</span>
          </Card.Text>
          <Card.Text className="d-flex">
            Location: <span className="ml-2">{location || "—"}</span>
          </Card.Text>
          <Card.Text className="d-flex">
            Dated: <span className="ml-2">{dated || "—"}</span>
          </Card.Text>
        </Card.Body>
        <hr />
      </Card>
    </div>
  );
};



export default BudgetCard;
