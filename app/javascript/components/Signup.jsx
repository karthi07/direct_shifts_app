import React, { useRef } from "react"
import { Link, useSearchParams } from "react-router-dom";
import useToken from "./useToken"
import Logout from "./Logout";

const Signup = () => {
  const formRef = useRef()
  const { token, setToken } = useToken();
  const [queryParameters] = useSearchParams()

  if (token) {
    return (<>
      <div>Already Logged in, go back to <Link to="/">Home</Link> .</div>
      <Logout />
    </>)
  }
  const signup = async (userInfo) => {
    const url = "http://localhost:3000/auth/signup"
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          "content-type": 'application/json',
          "accept": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      const data = await response.json()
      if (!response.ok) throw data.error
      setToken(response.headers.get("Authorization"))
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, username: data.username, password: data.password, referral: data.referral_code }
    }
    signup(userInfo)
    e.target.reset()
    window.location = "/"
  }
  const handleClick = e => {
    e.preventDefault()
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" required />
        <br />
        Username: <input type="text" name='username' placeholder="username" required />
        <br />
        Password: <input type="password" name='password' placeholder="password" required />
        <br />

        Referral Code (optional):  <input type="text" name='referral_code' defaultValue={queryParameters.get('referral_code')} />
        <br />
        <input type='submit' value="Submit" />
      </form>
      <br />
      <div>Already registered, <Link to="/login">Login</Link>   here.</div>
    </div>
  )
}
export default Signup;