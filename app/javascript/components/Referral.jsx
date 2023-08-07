import React, { useState, useEffect } from "react"
function getToken() {
    const tokenString = localStorage.getItem('userToken');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}
const Referral = () => {
    const [message, setMessage] = useState()
    const getText = async () => {
        try {
            const response = await fetch("http://localhost:3000/referral", {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": getToken()
                }
            })
            if (!response.ok) throw Error
            const data = await response.json()
            setMessage(data.data)
        }
        catch (error) {
            console.log("error", error)
            setMessage(null)
        }
    }
    useEffect(() => {
        if (true)
            getText()
    }, [])
    return (
        <div>{message}</div>
    )
}
export default Referral