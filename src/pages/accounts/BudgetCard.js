/* Component in the Projects Component to display a Project's data */
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../api/axiosDefaults";
import { UniDropdown } from "../../components/UniDropDown";


import styles from "../../styles/Account.module.css";
import { Button, Form, Modal, Table } from "react-bootstrap";

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
  const [sharedListing, setSharedListing] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSuccessMsg("");
    setFormData({ name: "", email: "" });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [modalType, setModalType] = useState('add')
  const handleShow = (type) => {
    setModalType(type)
    setShow(true)
    if (type === "list") {
      handleFetchSharedListing()
    }

  };
  const history = useHistory();
  const [trigger, setTrigger] = useState(false);
  const handleEdit = () => {
    // history.push(`/projects/edit/${id}`);
    history.push(`/${id}/my-budgets`);
  };

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/budget-view/${id}`);
      if (res?.data?.status === 200) {
        setTrigger(true)
        toast.success(res?.data?.data?.message + '!')
        if (fetchData) fetchData();
      } else {
        toast.error(res?.data?.data?.message)
      }
    } catch (err) {
      console.log("failed to delete", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const res = await axiosInstance.post("/budget-sharing/",
        {
          budget: id,
          email: formData.email,
          name: formData.name,
        },
      );
      setTrigger(true)
      if (String(res?.data?.status) === '201') {
        setSuccessMsg("Budget shared successfully!");
        setFormData({ name: "", email: "" });
      } else {
        toast.error(res?.error?.response?.data?.non_field_errors[0]  ?? 'Someting went wrong')
      }
    } catch (err) {
      setSuccessMsg("Failed to share. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFetchSharedListing = async () => {
    try {
      const { data } = await axiosInstance.get(`/budget-sharing/?budget_id=${id}`)
      setSharedListing(data?.data?.results)
    }catch(e){}
    // setTrigger(true)
  }

  const handleDeleteSharedBudget = async (id) => {
    const res = await axiosInstance.delete(`/budget-sharing/${id}`)
    if (res.success) {
      setTrigger(true)
      toast.success('Budget deleted successfully!')
    } else {

    }
  }

  // GET SHARED BUDGET
  useEffect(() => {
    if (trigger) {
      handleFetchSharedListing();
      setTrigger(false);
    }
  }, [trigger]);
  return (
    <div>
      <Card className="mb-3">
        <Card.Body className={`${styles.ProTop} py-2`}>
          <Row className="d-flex align-items-center">
            <Col className="text-center" xs={10}>
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
          <Button className="mx-3 my-3" size="sm" variant="secondary" onClick={() => handleShow('add')} >
            <i className="fa fa-share"></i> Share Budget
          </Button>
          <Button className="mx-3 my-3" size="sm" variant="secondary" onClick={() => handleShow('list')} >
            <i className="fa fa-info"></i> Shared Budget Info
          </Button>
        </div>


        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Share Budget</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {
              modalType === 'add' &&
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter recipient's email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {successMsg && <div className="text-success mb-3">{successMsg}</div>}

                <div className="d-flex justify-content-end">
                  <Button variant="secondary" onClick={handleClose} className="me-2">
                    Cancel
                  </Button>
                  &nbsp;
                  <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? "Sharing..." : "Share"}
                  </Button>
                </div>
              </Form>
            }
            {
              modalType === 'list' &&

              <>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Email</th>
                      <th>Name</th>
                      <th>Public URL</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      sharedListing?.length === 0 && <tr>
                        <td colSpan="6" className="text-center text-muted">
                          No Shared Budget List Found!
                        </td>
                      </tr>
                    }
                    {
                      sharedListing?.map((res, i) => {
                        const { id, email, url, name } = res;
                        return (
                          <tr key={id}>
                            <td>{i + 1}</td>
                            <td>{email}</td>
                            <td>{name}</td>
                            <td>
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                Open Link
                              </a>
                            </td>
                            <td>
                              <Button size="sm" onClick={() => handleDeleteSharedBudget(id)} className="bg-danger btn btn-sm" rel="noopener noreferrer">
                                <i className="fa fa-trash"></i>
                              </Button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </>
            }
          </Modal.Body>
        </Modal>

      </Card>
    </div>
  );
};



export default BudgetCard;
