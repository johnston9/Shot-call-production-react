import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/ChatCreate.module.css";
import TopBox from "../../components/TopBox";
import { Button as ManButton } from "@mantine/core";
import toast from "react-hot-toast";

export default function () {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.contactNumber || !data.email || !data.message) {
      toast.error("All the fields are required!");
      return;
    }

    console.log(data);
  };

  const buttons = (
    <div
      className="mt-3"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <ManButton
        disabled={isLoading}
        type="submit"
        sx={(theme) => ({
          backgroundColor: theme.colors.lightBlue,
        })}
      >
        Send
      </ManButton>
    </div>
  );
  return (
    <div>
      <div className="mx-md-5">
        <TopBox title="Contact Us" />
      </div>
      <Row>
        <Col className={`${styles.Back} mt-3`} md={{ span: 6, offset: 3 }}>
          {/* <h5
            style={{ textTransform: "uppercase" }}
            className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle} text-center`}
          >
            CONTACT US
          </h5> */}

          {/* form  */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group
                      controlId="name"
                      className={`${styles.Width95}`}
                    >
                      <Form.Label
                        className={`${styles.Bold} `}
                        style={{ fontSize: "0.8rem" }}
                      >
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={styles.Input}
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group
                      controlId="email"
                      className={`${styles.Width95}`}
                    >
                      <Form.Label
                        className={`${styles.Bold} `}
                        style={{ fontSize: "0.8rem" }}
                      >
                        Email
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={styles.Input}
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group
                      controlId="contactNumber"
                      className={`${styles.Width95}`}
                    >
                      <Form.Label
                        className={`${styles.Bold} `}
                        style={{ fontSize: "0.8rem" }}
                      >
                        Contact Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={styles.Input}
                        name="contactNumber"
                        value={data.contactNumber}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group
                      controlId="message"
                      className={`${styles.Width95}`}
                    >
                      <Form.Label
                        className={`${styles.Bold} `}
                        style={{ fontSize: "0.8rem" }}
                      >
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        className={styles.Input}
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={`mt-1`}>{buttons} </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
