import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import TransactionsTable from "./TransactionTable";
import styles from "../../styles/Account.module.css";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function TransactionsPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const headers = [
    "Plan Name",
    "Payment Method",
    "Card No.",
    "Amount",
    "Status",
    "Payment Date",
  ];

  const getStatus = (status) => {
    switch (status) {
      case "succeeded":
        return "Success";
      case "pending":
        return "Pending";
      case "failed":
        return "Failed";
      case "canceled":
        return "Canceled";

      default:
        return "";
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/payments-latest/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      if (response?.data?.status === 200) {
        setLoading(false);
        // console.log(response);
        // setAllPlans(response?.data?.data?.results);
        const modifiedData =
          response?.data?.data?.results?.length > 0
            ? response?.data?.data?.results?.map((el) => ({
                plan_name: el?.plan_name,
                payment_method_type: el?.payment_method_type,
                card_last_four: el?.card_last_four,
                amount: el?.amount,
                status: getStatus(el?.status),
                created_at: el?.created_at,
              }))
            : [];

        setData(modifiedData);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <h2
          className="text-center py-4 w-100 mt-2"
            style={{
              background: "#3B444A",
              color: "#F5F5F5",
              fontFamily: "Playfair Display",
              textTransform: "uppercase",
            }}
          >
            Transaction List
          </h2> */}
          <div className={`${styles.Top}`}>
    <Row className="py-3 text-center">
      <Col className=" d-flex align-items-center justify-content-center">
      <h3 
      style={{
              textTransform: "uppercase",
              // fontFamily: "Playfair Display",
            }}
      className={` ${styles.TopName2} pt-3`}>
          Transaction List
        </h3>
      </Col>
    </Row>
    </div>
      <div
      className="py-4"
      style={{
        margin: "0 auto",
        maxWidth: "1400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <TransactionsTable
          headers={headers}
          data={data}
          dataLoading={loading}
        />
      </div>
    </div>
    </div>
  );
}
