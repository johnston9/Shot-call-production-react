/* Component in the Account component to create Projects */
import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "../../styles/ChatCreate.module.css"
// import btnStyles from "../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert"
import { axiosInstance, axiosInstanceNoAuth } from "../../api/axiosDefaults"
import {
  MultiSelect as ManMultiSelect,
  Button as ManButton,
} from "@mantine/core"
import { toast } from "react-hot-toast"
import { useCurrentUser } from "../../contexts/CurrentUserContext"

function CreateProject({ setShow, fetchProjects }) {
  const userData = useCurrentUser()
  const [errors, setErrors] = useState({})
  const [allCategoryTypes, setAllCategoryTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [postData, setPostData] = useState({
    categoryTypes: [],
    name: "",
  })

  const { name, categoryTypes } = postData

  const handleChange = (event) => {
    console.log(event.name)

    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    axiosInstanceNoAuth
      .get("/categories/")
      .then((res) => {
        console.log(res.data.results)
        const formattedCategoryTypes = res?.data?.results?.map((data) => ({
          value: data.type,
          label: data.type,
        }))
        setAllCategoryTypes(formattedCategoryTypes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSetCategoryTypes = (data) => {
    setPostData((prev) => ({
      ...prev,
      categoryTypes: data,
    }))
  }

  const textFields = (
    <div>
      <Form.Group controlId="name" className={`${styles.Width95} text-center`}>
        <Form.Label className={`${styles.Bold} `}>Name</Form.Label>
        <Form.Control
          type="text"
          className={styles.Input}
          name="name"
          value={name}
          onChange={handleChange}
          disabled={isLoading}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <ManMultiSelect
        sx={{
          textAlign: "center",
          "& .mantine-InputWrapper-label": { fontWeight: "bold" },
        }}
        data={allCategoryTypes}
        value={postData.categoryTypes}
        label="Project Types"
        placeholder="Enter project types"
        onChange={handleSetCategoryTypes}
        disabled={isLoading}
      />
    </div>
  )

  const buttons = (
    <div className="text-center mt-3">
      <ManButton
        type="submit"
        sx={(theme) => ({
          backgroundColor: theme.colors.lightBlue,
          marginRight: 10,
        })}
        onClick={() => setShow((show) => !show)}
        disabled={isLoading}
      >
        Cancel
      </ManButton>
      <ManButton
        disabled={isLoading}
        type="submit"
        sx={(theme) => ({
          backgroundColor: theme.colors.lightBlue,
        })}
      >
        Create
      </ManButton>
    </div>
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = {
      category_type: categoryTypes,
      name,
      stripe_id: "123",
      user: userData,
    }

    try {
      const { data } = await axiosInstance.post("/projects/", formData)
      toast.success("Project created")
      console.log(data)
      setPostData({
        categoryTypes: [],
        name: "",
      })
      setShow(false)
      fetchProjects()
    } catch (err) {
      toast.error("Project creation failed")
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Row>
        <Col className={`${styles.Back} mt-3`} md={{ span: 6, offset: 3 }}>
          <h5
            style={{ textTransform: "uppercase" }}
            className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle} text-center`}
          >
            CREATE NEW PROJECT
          </h5>
          <Form className="mt-3 px-3" onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="pl-3">
                {textFields}
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={`mt-1`}>{buttons} </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default CreateProject
