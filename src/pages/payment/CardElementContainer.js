import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

export default function CardElementContainer({
  cardElementOptions,
  isMxTwo = true,
  customClassName,
  customStyle = {},
  
}) {
  return (
    <div
      className={`col-12 ${isMxTwo ? "mx-2" : ""} ${customClassName || ""}`}
      style={{
        border: "1px solid #c8d3f6",
        borderRadius: "6px",
        height: "57px",
        lineHeight: "19px",
        padding: "1rem",
        ...customStyle,
      }}
    >
      <CardElement options={{ ...cardElementOptions }} />
    </div>
  );
}
