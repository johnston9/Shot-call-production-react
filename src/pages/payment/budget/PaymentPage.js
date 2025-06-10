import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Row, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import BillingDetailsFields from "../BillingDetailsFields";
import CardElementContainer from "../CardElementContainer";
import { axiosInstance } from "../../../api/axiosDefaults";
import StripeImage from "../../../assets/stripe-logo-company.png";

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
    currency: ""
  });
  const [accepted, setAccepted] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

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
    if (!accepted) {
      toast.error("Please accept terms and conditions!");
      setProcessingPayment(false);

      return;
    }

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
      // currency: formData?.currency?.split(',')[0]?.toLowerCase() ?? "usd",
    });
    if (error) {
      setProcessingPayment(false);
      // console.log(error);
    } else {
      const {
        id,
        billing_details: { address, email, name },
        card,
      } = paymentMethod;
      // console.log("payment method id: ", id);

      // calling create customer api
      const res = await axiosInstance.post(
        `/create-customer/`,
        {
          plan_id: planId,
          subscription_type: "budget",
          currency: formData?.currency?.split(',')[0]?.toLowerCase() ?? "usd",
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

      // console.log("create-customer: ", res);
      if (res.data?.data?.subscription?.status === "trialing") {
        setProcessingPayment(false);
        history.push(`/subscription-plans`);
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

  const fetchData = async (pId) => {
    try {
      // setLoading(true);
      const response = await axiosInstance.get(`/plans/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      if (response?.data?.status === 200) {
        // setLoading(false);
        const price = response?.data?.data
          ?.find((p) => p?.category?.name === "Budget Only")
          ?.plans?.find((plan) => plan?.id === params?.planId)?.price;

        // console.log(plans);
        // const plan = plans?.find((p) => p?.id === pId);

        console.log("paisa>>>>>>>>>>>", price, response?.data?.data);
        setPaymentAmount(price);
      }
    } catch (err) {
      // setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    setPlanId(params?.planId);
    if (params?.planId) {
      fetchData(params?.planId);
    }
  }, [params]);

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
              <div className="col-12">
                <Form.Group controlId="termsConditions">
                  <Form.Check
                    type="checkbox"
                    label={
                      <>
                        I accept the{" "}
                        <a
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms and Conditions
                        </a>
                      </>
                    }
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Row
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      width: "100%",
                    }}
                  > */}
                  <div style={{ display: "inline-block" }}>
                    Your data is safe with
                  </div>
                  {/* </div> */}
                  <img src={StripeImage} height={30} />
                </Row>
                <Button type="submit" disabled={processingPayment}>
                  {processingPayment
                    ? "Processing payment"
                    : `Pay ${formData?.currency.split(',')[1] ?? '$'} ${paymentAmount} Now`}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
