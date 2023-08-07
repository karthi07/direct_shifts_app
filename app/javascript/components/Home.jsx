import { useState } from "react";
import React from "react";
import Referral from "./Referral";
import Logout from "./Logout";
import Login from "./Login";
import useToken from "./useToken"


export default () => {
  const [currUser, setCurrUser] = useState(null);

  const { token, setToken } = useToken();

  if (!token) {
    return (<Login setToken={setToken} />)
  }
  return (
    <div>
      <Referral currUser={currUser} />
      <Logout setCurrUser={setCurrUser} />
    </div>
  )
};