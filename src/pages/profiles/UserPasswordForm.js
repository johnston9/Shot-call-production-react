/* Form Page to edit a Profile Password */
import React, { useEffect, useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import styles from "../../styles/Account.module.css";
import toast from "react-hot-toast";

import { useHistory, useParams } from "react-router"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const UserPasswordForm = () => {
  // useRedirect();
  const host = useHostName()
  const history = useHistory()
  const { id } = useParams()
  const currentUser = useCurrentUser()

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  })
  const { new_password1, new_password2 } = userData

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push("/")
    }
  }, [currentUser, history, id])

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if fields are empty
    if (!new_password1 || !new_password2) {
      toast.error("Both password fields are required");
      // setShowToast(true);
      return;
    }

    // Check if passwords match
    if (new_password1 !== new_password2) {
      toast.error("Passwords do not match");
      // setShowToast(true);
      return;
    }

    try {
      const endpoint =
        host === CLIENT_PROGRAM_HOSTNAME ? axiosRes : axiosInstance;

      await endpoint.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
      toast.error(`Password not Updated! Please try again.`);
    }
  };


  return (
    <div>
      <div className={`${styles.Top}`}>
    <Row className="py-3 text-center">
      <Col className=" d-flex align-items-center justify-content-center">
      <h3 className={` ${styles.TopName2} pt-3`}>
          CHANGE PASSWORD
        </h3>
      </Col>
    </Row>
    </div>
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
    </Row>
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <Form onSubmit={handleSubmit}>
          <p className={`${styles.SmallSize} text-center`}>
          Enter your new Password and note it down as an advisory email is not sent
          </p>
          <Row>
          <Col>
            <Form.Group>
              <Form.Label className={`${styles.BoldScene}`}>New Password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                className={`${styles.Input}`}
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className={`${styles.BoldScene}`}>Confirm Password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                className={`${styles.Input}`}
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            <Row className="text-center mt-3">
            <Col className="mt-3">
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-3 px-md-5`}
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 px-3 px-md-5`}
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
          </Form>
        </Container>
      </Col>
    </Row>
    </div>
  )
}

export default UserPasswordForm
