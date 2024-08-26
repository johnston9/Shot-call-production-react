import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import BillingDetailsFields from "../BillingDetailsFields";
import CardElementContainer from "../CardElementContainer";
import { axiosInstance } from "../../../api/axiosDefaults";

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#050F2F",
      "::placeholder": {
        color: "#9A98A8",
      },
    },
    invalid: {
      color: "#f54e4e",
      iconColor: "#f54e4e",
    },
  },
  hidePostalCode: true,
};

export default function BudgetPaymentPage() {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const params = useParams();
  const [planName, setPlanName] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);
  const [planId, setPlanId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressLine1: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });
  const stripe = useStripe();
  const elements = useElements();

  // const getPaymentIntent = async (plan_id, plan_name) => {
  //   try {
  //     // const response = await axiosInstance.get(`user/payment-methods/intent`)
  //     const response = await axiosInstance.post(
  //       `/create-payment-intent/`,
  //       { plan_id, plan_name },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //         withCredentials: true,
  //       }
  //     );

  //     console.log(response);
  //     setClientSecret(response.data.data.client_secret);
  //     setPaymentIntentId(response.data.data.payment_intent_id);
  //   } catch (error) {
  //     console.error("Error fetching feeds:", error);
  //   } finally {
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessingPayment(true);

    if (
      !formData.city ||
      !formData.country ||
      !formData.addressLine1 ||
      !formData.postalCode ||
      !formData.state
    ) {
      setProcessingPayment(false);
      toast.error("All the fields are required!");
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const body = {
      name: currentUser?.username,
      email: currentUser?.email,
      address: {
        city: formData.city,
        state: formData.state,
        line1: formData.addressLine1,
        line2: "",
        postal_code: formData.postalCode,
      },
    };
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: body,
    });
    if (error) {
      setProcessingPayment(false);
      console.log(error);
    } else {
      const {
        id,
        billing_details: { address, email, name },
        card,
      } = paymentMethod;
      console.log("payment method id: ", id);

      // calling create customer api
      const res = await axiosInstance.post(
        `/create-customer/`,
        {
          //   plan_id: planId,
          subscription_type: "budget",
          customer_details: {
            payment_method: id,
            address_line1: formData.addressLine1,
            city: formData.city,
            state: formData.state,
            country: formData?.country,
            postal_code: formData.postalCode,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      console.log("create-customer: ", res);
      if (res.data?.data?.subscription?.status === "trialing") {
        setProcessingPayment(false);
        history.push(`/accounts/${currentUser?.profile_id}`);
        toast.success("Payment successful");
      } else {
        setProcessingPayment(false);
        toast.error("Payment failed!");
      }
    }

    // console.log(paymentMethod)
  };

  //   useEffect(() => {
  //     setPlanId(params?.planId);
  //     setPlanName(params?.planName);
  //     // if (params?.planId && params?.planName) {
  //     //   getPaymentIntent(params?.planId, params?.planName);
  //     // }
  //   }, [params]);

  //   const options = {
  //     clientSecret: clientSecret,
  //   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-2">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          {/* <div className="col-12"> */}
          <Row>
            <CardElementContainer cardElementOptions={cardElementOptions} />
          </Row>
          {/* </div> */}

          <BillingDetailsFields
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            // formError={formError}
            // stateList={stateList}
            isInlineValidation={true}
          />

          <div className="col-12">
            <div className="mt-2 row">
              <div className="col-12 col-lg-2">
                <Button type="submit" disabled={processingPayment}>
                  {processingPayment ? "Processing payment" : "Pay Now"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
