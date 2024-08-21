import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosDefaults";

export default function useActivePlan() {
  const [currentlyActivePlan, setCurrentActivePlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMyActivePlan = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/my-plan/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      if (response?.data?.status === 200) {
        setLoading(false);
        setCurrentActivePlan(response?.data?.data[0]);
      } else {
        setLoading(false);
        setCurrentActivePlan(null);
      }
    } catch (err) {
      setLoading(false);
      setCurrentActivePlan(null);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyActivePlan();
  }, []);
  return {
    loading,
    currentlyActivePlan,
  };
}
