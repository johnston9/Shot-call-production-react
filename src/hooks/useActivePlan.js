import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosDefaults";

export default function useActivePlan() {
  const [currentlyActivePlans, setCurrentActivePlans] = useState([]);
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
        setCurrentActivePlans(response?.data?.data);
      } else {
        setLoading(false);
        setCurrentActivePlans([]);
      }
    } catch (err) {
      setLoading(false);
      setCurrentActivePlans([]);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyActivePlan();
  }, []);
  return {
    loading,
    currentlyActivePlans,
    fetchMyActivePlan,
  };
}
