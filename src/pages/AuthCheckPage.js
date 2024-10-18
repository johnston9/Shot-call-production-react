import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AuthCheckPage() {
  const history = useHistory();
  if (!localStorage.getItem("accessToken")) {
    toast.error("Session timeout");
    history.push(`/signin`);
  }
  return <></>;
}
