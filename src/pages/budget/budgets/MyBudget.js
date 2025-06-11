import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
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
    const [budgetCount, setBudgetCount] = useState({ remaining_budget_count: 0, total_budget_count: 0 })
    // const [budget1, setBudget1] = useState({ results: [] });
    // const [budget2, setBudget2] = useState({ results: [] });
    // const [budget3, setBudget3] = useState({ results: [] });

    const fetchProjects = async () => {
        try {
            const res = await axiosInstance.get(`/budget-view`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                withCredentials: true,
            });

            setProjects({ results: res?.data?.data?.results });
            setBudgetCount({
                total_budget_count: res?.data?.data?.total_budget_count,
                remaining_budget_count: res?.data?.data?.remaining_budget_count,
            });
            setHasLoaded(true);
        } catch (err) {
            console.log(err);
            setHasLoaded(true);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

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
                {
                    parseInt(budgetCount?.remaining_budget_count) !== 0 &&
                    <Button
                        className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
                        onClick={() => {
                            history.push("/my-budgets/step-one");
                        }}
                    >
                        Create Budget
                    </Button>
                }
                <Alert variant="info"
                    style={{
                        maxWidth: "fit-content",
                        margin: "0 auto",
                    }}>


                    {budgetCount?.remaining_budget_count} Budget remaining out of {budgetCount?.total_budget_count}


                </Alert>
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
                                                    fetchData={fetchProjects}
                                                />
                                            </Col>
                                        );
                                    }
                                    return (null);
                                })
                            ) : (
                                <Container className={appStyles.Content}>
                                    <Asset src={NoResults} message={budgetCount?.remaining_budget_count >= '1' ? "No Budgets" : `You don't have any subscription plan for budget`} />
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