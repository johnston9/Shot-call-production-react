/* Component in the Account component to create Projects */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/ChatCreate.module.css";
// import btnStyles from "../../styles/Button.module.css"
import Alert from "react-bootstrap/Alert";
import { axiosInstance, axiosInstanceNoAuth } from "../../api/axiosDefaults";
import { Button as ManButton, Select as ManSelect } from "@mantine/core";
import { toast } from "react-hot-toast";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams, useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import stripevisa from "../../assets/stripevisa.png";

function CreateProject({
  setShow,
  fetchProjects,
  stripeCategoryType,
  stripeProjectName,
  stripeSessionId,
  stripeSuccess,
  getCurrentUserData,
}) {
  const history = useHistory();
  const userData = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [allCategoryTypes, setAllCategoryTypes] = useState([]);
  const [unformattedCategoryTypes, setUnformattedCategoryTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(null);

  const [postData, setPostData] = useState({
    categoryType: "",
    name: "",
  });

  const { name, categoryType } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (postData.categoryType !== "") {
      const selectedCategory = unformattedCategoryTypes.find(
        (cat) => cat.type === postData.categoryType
      );
      setCurrentAmount(selectedCategory.amount);
    }
  }, [postData.categoryType, unformattedCategoryTypes, setCurrentAmount]);

  useEffect(() => {
    axiosInstanceNoAuth
      .get("/categories/")
      .then((res) => {
        console.log(res.data.results);
        setUnformattedCategoryTypes(res.data.results);
        const formattedCategoryTypes = res?.data?.results?.map((data) => ({
          value: data.type,
          label: data.type,
        }));
        setAllCategoryTypes(formattedCategoryTypes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSetCategoryTypes = (data) => {
    setPostData((prev) => ({
      ...prev,
      categoryTypes: data,
    }));
  };

  const textFields = (
    <div>
      <Form.Group controlId="name" className={`${styles.Width95}`}>
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

      <ManSelect
        sx={{
          "& .mantine-InputWrapper-label": {
            fontWeight: "700",
            fontSize: "0.8rem",
          },
        }}
        data={allCategoryTypes}
        value={postData.categoryType}
        onChange={(value) =>
          setPostData((prev) => ({ ...prev, categoryType: value }))
        }
        label="Project Type"
        placeholder="Enter project types"
        disabled={isLoading}
      />

      {/* {currentAmount && (
        <div>
          <div
            className="mt-4"
            style={{ fontSize: "0.8rem", fontWeight: "bold" }}
          >
            Amount: <span className="ml-2">${currentAmount}</span>
          </div>
          <Image
            src={stripevisa}
            style={{ objectFit: "contain" }}
            height={120}
            width={120}
          />
        </div>
      )} */}
    </div>
  );

  const buttons = (
    <div className="mt-3" style={{ marginLeft: "14rem" }}>
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
  );

  useEffect(() => {
    console.log(JSON.parse(stripeSuccess));
  }, [stripeSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (name === "") {
      toast.error("Project name is required");
      setIsLoading(false);
      return;
    }
    if (categoryType === "") {
      toast.error("Project type is required");
      setIsLoading(false);
      return;
    }

    const formData = {
      category_type: categoryType, //category_type: ''
      project_name: name,
    };

    try {
      const response = await axiosInstance.post(
        `/projects/stripe-success/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      console.log(response);
      if (response?.success) {
        toast.success(response?.data?.data?.message);
        fetchProjects();
        getCurrentUserData();
        setPostData((prev) => ({ ...prev, categoryType: "", name: "" }));
      } else {
        console.log(response);
        toast.error(response?.error?.response?.data?.error);
      }
      // window.open(data.data.message, "_self");

      // history.push(data.message)
      // return URL
      // redirect to that URL
      // if success = true in URL, then GET "/projects/stripe-success/?"
      // toast.success("Project created")
      // console.log(data)
      // setPostData({
      //   categoryTypes: [],
      //   name: "",
      // })
      // setShow(false)
      // fetchProjects()
    } catch (err) {
      toast.error("Project creation failed");
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
  );
}

export default CreateProject;
