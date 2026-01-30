/* Form Page to edit a Profile */
import React, { useState, useEffect, useRef } from "react"
import { useHistory, useParams } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import styles from "../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert"
import toast from "react-hot-toast";

import { axiosInstance, axiosReq } from "../../api/axiosDefaults"
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext"

import btnStyles from "../../styles/Button.module.css"
import appStyles from "../../App.module.css"
import { useRedirect } from "../../hooks/Redirect"
import useHostName from "../../hooks/useHostName"
import { CLIENT_PROGRAM_HOSTNAME } from "../../utils/config"
import InfoProEdit from "./InfoProEdit"

const ProfileEditForm = () => {
  // useRedirect()
  const host = useHostName()
  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()
  const { id } = useParams()
  const history = useHistory()
  const imageFile = useRef()
  const [showImp, setShowImp] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    company: "",
    content: "",
    image: "",
  })
  const { name, company, content, image } = profileData

  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          if (host === CLIENT_PROGRAM_HOSTNAME) {
            const { data } = await axiosReq.get(`/profiles/${id}/`)
            const { name, company, content, image } = data
            setProfileData({ name, company, content, image })
          } else {
            const { data } = await axiosInstance.get(`/profiles/${id}/`)
            console.log(data)
            const { name, company, content, image } = data?.data
            setProfileData({ name, company, content, image })
          }
        } catch (err) {
          console.log(err)
          history.push("/")
        }
      } else {
        history.push("/")
      }
    }

    handleMount()
  }, [currentUser, history, id])

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("company", company)
    formData.append("content", content)

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0])
    }

    try {
      if (host === CLIENT_PROGRAM_HOSTNAME) {
        const { data } = await axiosReq.put(`/profiles/${id}/`, formData)
        setCurrentUser((currentUser) => ({
          ...currentUser,
          profile_image: data.image,
        }))
        history.goBack()
        toast.success(`Profile Updated Successfully!`);
      } else {
        const { data } = await axiosInstance.put(`/profiles/${id}/`, formData)
        setCurrentUser((currentUser) => ({
          ...currentUser,
          profile_image: data.data.image,
        }))
        history.goBack()
        toast.success(`Profile Updated Successfully!`);
      }
    } catch (err) {
      console.log(err)
      setErrors(err.response?.data)
    }
  }

  const textFields = (
    <>
      <Form.Group controlId="name" className="mb-2">
        <Form.Label className="p-1">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group controlId="company" className="mb-2">
        <Form.Label className="p-1">Company</Form.Label>
        <Form.Control
          type="text"
          name="company"
          value={company}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.company?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Additional</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={3}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Row>
        <Col className="mt-3">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mr-3 px-3`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ml-3 px-3`}
            type="submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  )

  return (
    <div>
      <div className={`${styles.Top}`}>
      <Row className="py-3 d-flex align-items-center">
        <Col className="text-center">
        <h2 className={` ${styles.TopName}`}>
            EDIT PROFILE
          </h2>
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
              <Col xs={6} >
              <Button
                className={`float-right px-3 ${btnStyles.Button} ${btnStyles.Order}`}
                onClick={() => setShowImp(showImp => !showImp)}
              >INFO
              </Button>
              </Col>
            </Row>
            {!showImp ? (
                ""
                    ) : (
                      <InfoProEdit  /> 
            ) }
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
    {/* form2 */}
     <Form className={`${styles.WhiteBack } px-3`} onSubmit={handleSubmit}>
        <Row className="mt-3">
          <Col md={6} className="text-center" >
          {/* name */}
          <Form.Group controlId="name" className="mb-2">
            <Form.Label className={`${styles.BoldScene}`}>Name</Form.Label>
            <Form.Control
            className={`${styles.Input}`}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          {/* Company */}
          <Form.Group controlId="company" className="mb-2">
            <Form.Label className={`${styles.BoldScene}`}>Company</Form.Label>
            <Form.Control
            className={`${styles.Input}`}
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.company?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          {/* Additional */}
          <Form.Group controlId="content" className="mb-2">
            <Form.Label className={`${styles.BoldScene}`}>Additional</Form.Label>
            <Form.Control
            className={`${styles.Input}`}
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="text-center" md={4}>
          <p className={`${styles.BoldScene}`}>Profile Image</p>
            <div>
              <Form.Group>
                {image && (
                  <figure >
                    <Image 
                    className={`${styles.ImagesIndex}`}
                    src={image} />
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.GreyDark} my-auto`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
                <Form.Control
                  type="file"
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  }}
                />
              </Form.Group>
            </div>
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
    </div>
  )
}

export default ProfileEditForm
