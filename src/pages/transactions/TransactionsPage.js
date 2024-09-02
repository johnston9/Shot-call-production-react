import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import TransactionsTable from "./TransactionTable";

export default function TransactionsPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const headers = ["Payment Intent Id", "Plan Id", "Amount", "status", "Date"];

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
                stripe_payment_intent_id: el?.stripe_payment_intent_id,
                stripe_plan_id: el?.stripe_plan_id,
                amount: el?.amount,
                status: el?.status,
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
    <div className="py-2">
      <TransactionsTable headers={headers} data={data} dataLoading={loading} />
    </div>
  );
}
