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
import { useParams } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import TopBoxSign from "../../components/TopBoxSign";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirectSign } from "../../hooks/RedirectSign";
import { setTokenTimestamp } from "../../utils/utils";
import { axiosInstanceNoAuth } from "../../api/axiosDefaults";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const ForgotPasswordForm = () => {
  // useRedirectSign()
  const { token, token_id } = useParams();
  // console.log(token, token_id);
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    password: "",
    confirm_password: "",
  });

  const { password, confirm_password } = signInData;

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
    if (password !== confirm_password) {
      setErrors({
        confirm_password: ["Passwords do not match"],
      });
      return;
    }
    try {
      const { data } = await axiosInstanceNoAuth.post(
        `/reset-password/${token}/${token_id}/`,
        {
          new_password: password,
        }
      );

      // console.log(data);
      toast.success(
        `You have successfully reset your password. Soon you will be redirected to the Login.`,
        {
          duration: 6000,
        }
      );
      setTimeout(() => {
        history.push("/signin");
      }, 1000);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={styles.SignupBox}>
      <TopBoxSign title="Reset Password" />
      <Row className={styles.Row}>
        <Col className="my-3 pr-0 pl-3 pl-md-4" xs={1} md={1}>
          <Image className={`${styles.FillerImagel}`} src={door} />
        </Col>
        <Col className="my-auto py-2 p-md-2" xs={10}>
          <Row>
            <Col md={3} className="d-none d-md-block"></Col>
            <Col xs={12} md={6} className="text-center">
              <Container>
                <h1 className={`${styles.Header}`}>Reset Password</h1>
                <Form onSubmit={handleSubmit} className={styles.Form}>
                  <Form.Group controlId="password" className="mb-2">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}
                  <Form.Group controlId="confirm_password" className="mb-2">
                    <Form.Label className="d-none">Confirm Password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.confirm_password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                      {message}
                    </Alert>
                  ))}

                  <div className="text-center">
                    <Button
                      className={`px-0 ${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                      type="submit"
                    >
                      Reset Password
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
                <Link className={styles.Link} to="/forgot-password">
                  Forgot Password <span>Here</span>
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
