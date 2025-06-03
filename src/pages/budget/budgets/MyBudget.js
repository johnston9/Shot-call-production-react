import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { axiosInstance, axiosReq } from '../../../api/axiosDefaults';
import Asset from '../../../components/Asset';
import appStyles from "../../../App.module.css";
import NoResults from "../../../assets/no-results.png";
import BudgetCard from '../../accounts/BudgetCard';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import Project from '../../accounts/Project';
// import BudgetCard from '../../accounts/BudgetCard';
import btnStyles from "../../../styles/Button.module.css";

function MyBudget() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [projects, setProjects] = useState({ results: [] });

    const [budget1, setBudget1] = useState({ results: [] });
    const [budget2, setBudget2] = useState({ results: [] });
    const [budget3, setBudget3] = useState({ results: [] });


    useEffect(() => {

        try {
            const data = axiosInstance.get(`/budget-view`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    withCredentials: true,
                }
            );

            console.log(", ????????????????", data);
            data.then((res) => {
                setProjects({ results: res?.data?.data?.results })
                console.log(", ????????????????", res?.data?.data?.results)
            })
            // setProjects(data);
            setHasLoaded(true);
        } catch (err) {
            console.log(err);
            setHasLoaded(true);
        }

    }, [])
    const history = useHistory();

    return (
        <div>
            <Row className="mt-5">
                <Col>
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Blue} ml-2 mb-2`}
                        onClick={() => history.goBack()}
                    >
                        Back
                    </Button>
                </Col>
            </Row>
            <Col className="text-center">

                <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
                    onClick={() => {
                        history.push("/my-budgets/step-one");
                    }}
                >
                    Create Budget
                </Button>
            </Col>
            <Row className="px-3">
                <Col className="text-center">
                    <h3 className="my-3 border-bottom">MY BUDGET</h3>
                </Col>
            </Row>

            <Row className="px-5">
                {hasLoaded ? (
                    <>
                        {
                            projects?.results?.length ? (
                                projects.results.map((proj) => {
                                    if (proj?.is_deleted) return null;
                                    if (proj?.is_owner) {
                                        return (
                                            <Col xs={12} md={4} className="" key={proj.id}>
                                                <BudgetCard
                                                    key={proj.id}
                                                    {...proj}
                                                // fetchData={fetchProjects}
                                                />
                                            </Col>
                                        );
                                    }
                                    return (null);
                                })
                            ) : (
                                <Container className={appStyles.Content}>
                                    <Asset spinner />
                                </Container>
                            )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                )}
            </Row>
        </div>
    )
}

export default MyBudget