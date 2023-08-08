import { useEffect, useState } from "react";
import React from "react";
import Referral from "./Referral";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import useToken from "./useToken"

export default () => {

  const { token, setToken } = useToken();

  if (!token) {
    return <div>Already registered, <Link to="/login">Login</Link>   here.</div>
  }
  return (
    <div>
      <Referral />
      <Logout />
    </div>
  )
};