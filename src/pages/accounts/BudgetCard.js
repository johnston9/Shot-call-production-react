/* Component in the Projects Component to display a Project's data */
import React, { useState } from "react";

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
import { Button, Form, Modal } from "react-bootstrap";

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
  fetchData
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const history = useHistory();

  const handleEdit = () => {
    // history.push(`/projects/edit/${id}`);
    history.push(`/${id}/my-budgets`);
  };

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/budget-view/${id}`);
      // console.log(res.data.data.message)
      if (res?.data?.status === 200) {
        toast.success(res?.data?.data?.message+'!')
        if (fetchData) fetchData();

      } else {
        toast.error(res?.data?.data?.message)
      }
      // alert()
      // refetch data if needed
    } catch (err) {
      console.log("failed to delete", err);
    }
  };

  return (
    <div>
      <Card className="mb-3">
        <Card.Body className={`${styles.ProTop} py-2`}>
          <Row className="d-flex align-items-center">
            <Col xs={2}> {/* Checkbox */}
              {/* <Form.Check
                type="checkbox"
                // label="I agree to the terms before sharing the budget"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              /> */}
            </Col>
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
                <UniDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  id={id}
                  type={'Budget'}
                />

                // <button onClick={handleEdit} className="btn btn-info-outline btn-sm"> <i className="fa fa-pen text-light"></i> </button>
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
        <div className="d-flex justify-content-between">
          <Button className="mx-3 my-3"  size="sm" variant="secondary"  onClick={() => {}} >
            <i className="fa fa-share"></i> Share Budget
          </Button>
          {/* <Button className="mx-3 my-3" size="sm" variant="secondary" onClick={handleShow} >
            <i className="fa fa-info"></i> Budget Info
          </Button> */}
        </div>


        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Table under the confirmation text */}
            <div className="d-flex justify-content-center mt-4">
              <table className="table table-bordered w-100 text-center">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Recevier Email</th>
                    <th>Secret code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>sample@gmail</td>
                    <td>******</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal.Body>

          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                // handleCloseDelete();
              }}
            >
              Delete
            </Button>
          </Modal.Footer> */}
        </Modal>

      </Card>
    </div>
  );
};



export default BudgetCard;
