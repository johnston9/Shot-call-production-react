import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// import useSubscription from '../../../hooks/useCurrentSubscription'
import { Button } from "react-bootstrap";
import axios from "axios";
import { axiosInstance } from "../../api/axiosDefaults";

export default function CheckoutForm({ planId, planName, paymentIntentI }) {
  //   const { fetchSubscription } = useSubscription()
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/subscription-plans`,
          setup_future_usage: "off_session",
          payment_method_data: {
            billing_details: {
              name: "anand",
              email: "mail2anand99@gmail.com",
            },
            metadata: {
              description: "Subscription to premium plan",
            },
          },
        },
        redirect: "if_required",
      })
      .then((data) => {
        console.log(data);
        if (data.paymentIntent?.status === "succeeded") {
          setLoading(false);
          paySubscribeMembership(
            data.paymentIntent.payment_method,
            "production"
          );
          //   fetchSubscription();
        } else {
          setLoading(false);
          console.log(data.error);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message?.toString);
        } else {
          setMessage("An unexpected error occured.");
        }
      });
  };

  const paySubscribeMembership = async (payment_method, type) => {
    setIsProcessing(true);
    try {
      //    {
      //     plan: "",
      //     payment_method: ,
      //   };
      const paymentPayload = {
        plan_id: planId,
        subscription_type: type,
        customer_details: {
          payment_method: payment_method,
          address_line1: "street no 1",
          city: "ny",
          state: "ny",
          country: "ch",
          postal_code: "123123",
        },
      };
      const response = await axiosInstance.post(
        `/create-customer/`,
        paymentPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.code === 200) {
        history.push("/subscription-plans");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error fetching feeds:", error);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <div className="flex justify-center w-full mt-2">
          <span id="button-text">
            {!isProcessing && !loading ? (
              <Button
                id="submit"
                type="submit"
                disabled={isProcessing || !stripe || !elements || loading}
                // className='bg-[#6F36BB] text-white'
              >
                Pay now
              </Button>
            ) : (
              <Button
                id="processing"
                disabled={isProcessing || !stripe || !elements || loading}
                className="bg-[#6F36BB] text-white"
              >
                Processing ...
              </Button>
            )}
          </span>
        </div>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
}
