/* Page to sign the user in
 * Set the CurrentUser Context
 * Set the TokenTimestamp */
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import toast from "react-hot-toast";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import TopBox from "../../components/TopBox";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirectSign } from "../../hooks/RedirectSign";
import { setTokenTimestamp } from "../../utils/utils";
import { axiosInstanceNoAuth } from "../../api/axiosDefaults";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const ForgotPasswordForm = () => {
  // useRedirectSign()
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    email: "",
  });

  const { email } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosInstanceNoAuth.post("/forgot-password/", {
        email: email,
      });

      console.log(data);
      toast.success(
        `We've sent password reset instructions to your email. Check your inbox or spam folder.`,
        {
          duration: 6000,
        }
      );
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={styles.SignupBox}>
      <TopBox title="Forgot Password" />
      <Row className={styles.Row}>
        <Col className="my-3 pr-0 pl-3 pl-md-4" xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={door} />
        </Col>
        <Col className="my-auto py-2 p-md-2" xs={10}>
          <Row>
            <Col md={3} className="d-none d-md-block"></Col>
            <Col xs={12} md={6} className="text-center">
              <Container>
                <h1 className={`${styles.Header}`}>Forgot Password</h1>
                <Form onSubmit={handleSubmit} className={styles.Form}>
                  <Form.Group controlId="username" className="mb-2">
                    <Form.Label className="d-none">Email</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.email?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}

                  <div className="text-center">
                    <Button
                      className={`px-0 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                      type="submit"
                    >
                      Send Reset Link
                    </Button>
                  </div>
                  {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} variant="warning" className="mt-3">
                      {message}
                    </Alert>
                  ))}
                </Form>
              </Container>
              <Container className="mt-3">
                <Link className={styles.Link} to="/signin">
                  Sign in <span>Here</span>
                </Link>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col className={`my-3 pl-0 pr-3 pr-md-4`} xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={rightdoor} />
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordForm;
