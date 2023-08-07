import Signup from "./Signup";
import Login from './Login'
import React from "react";
import Logout from './Logout'
import { useState } from "react";
import Referral from "./Referral";
const User = ({ currUser, setCurrUser }) => {
    const [show, setShow] = useState(true)
    if (currUser)
        return (
            <div>
                Hello {currUser.email}
                <Referral currUser={currUser} />
                <Logout setCurrUser={setCurrUser} />
            </div>
        )
    return (
        <div>
            {show ?
                <Login setCurrUser={setCurrUser} setShow={setShow} />
                :
                <Signup setCurrUser={setCurrUser} setShow={setShow} />
            }
        </div>
    )
}
export default User;