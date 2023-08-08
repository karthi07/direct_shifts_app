import React, { useState, useEffect } from "react"

const Referral = () => {
  const [referred, setReferred] = useState([])
  useEffect(() => {
    getReferredUsers()
  }, [])
  const getReferredUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/referral", {
        method: "get"
      })
      if (!response.ok) throw Error
      const data = await response.json()
      setReferred(data.referred_users)
    }
    catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div> List of successfull referral:  <br />< br />
      {referred.map((ref, i) => <li key={i}>  {ref.username} </li>)}

      <br />< br />
    </div>
  )
}
export default Referral