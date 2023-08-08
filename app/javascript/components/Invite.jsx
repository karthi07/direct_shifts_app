
import React, { useRef } from "react";


const Invite = () => {
  const formRef = useRef()

  const invite_user = async (inviteEmail) => {
    const url = "http://localhost:3000/api/v1/invite"
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({ email: inviteEmail })
      })
      const data = await response.json()
      if (!response.ok)
        throw data.error
    } catch (error) {
      console.log("error", error)
    }
  }


  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)

    invite_user(data.email)
    e.target.reset()
  }

  return (
    <div>
      Invite your friends!
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <input type='submit' value="invite" />
      </form>
    </div>
  )
}
export default Invite;