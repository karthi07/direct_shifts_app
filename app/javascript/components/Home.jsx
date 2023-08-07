import { useState } from "react";
import React from "react";
import User from './User'

export default () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div>
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  )
};