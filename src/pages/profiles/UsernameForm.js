/* Form Page to edit a Profile UserName */
import React, { useEffect, useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import styles from "../../styles/Account.module.css";
import toast from "react-hot-toast";

import { useHistory, useParams } from "react-router"
import { axiosInstance, axiosRes } from "../../api/axiosDefaults"
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"

const UsernameForm = () => {
  // useRedirect();
  const host = useHostName()
  const [username, setUsername] = useState("")
  const [errors, setErrors] = useState({})

  const history = useHistory()
  const { id } = useParams()

  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username)
    } else {
      history.push("/")
    }
  }, [currentUser, history, id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        await axiosRes.put("/dj-rest-auth/user/", {
          username,
        })
        setCurrentUser((prevUser) => ({
          ...prevUser,
          username,
        }))
        history.goBack()
        toast.success(`Username Updated Successfully!`);
      } else {
        await axiosInstance.put("/dj-rest-auth/user/", {
          username,
        })
        setCurrentUser((prevUser) => ({
          ...prevUser,
          username,
        }))
        history.goBack()
        toast.success(`Username Updated Successfully!`);
      }
    } catch (err) {
      console.log(err)
      setErrors(err.response?.data)
      toast.error(`Username not Updated! Please try again.`);
    }
  }

  return (
    <div>
    <div className={`${styles.Top}`}>
    <Row className="py-3 text-center">
      <Col className=" d-flex align-items-center justify-content-center">
      <h3 className={` ${styles.TopName2} pt-3`}>
          CHANGE USERNAME
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
          <Form onSubmit={handleSubmit} className="my-2">
          <p className={`${styles.SmallSize} text-center`}>
          Enter your new Username and note it down as an advisory email is not sent
          </p>
          <Row className="text-center">
            <Col >
            <Form.Group>
              <Form.Label className={`${styles.BoldScene}`}>New Username</Form.Label>
              <Form.Control
                placeholder="username"
                className={`${styles.Input}`}
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
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

export default UsernameForm
