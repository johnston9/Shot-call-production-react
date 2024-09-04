import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import TransactionsTable from "./TransactionTable";

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
        console.log(response);
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
    <div
      className="py-4"
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <div>
          <h4
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            Transaction List
          </h4>
        </div>
        <TransactionsTable
          headers={headers}
          data={data}
          dataLoading={loading}
        />
      </div>
    </div>
  );
}
