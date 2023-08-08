import React from "react"
import { Link } from "react-router-dom";
import { useRef } from "react"
import useToken from "./useToken"

const Login = () => {
  const formRef = useRef()
  const { token, setToken } = useToken();

  if (token) {
    window.location = "/"
  }
  const login = async (userInfo, setToken) => {
    const url = "http://localhost:3000/auth/login"
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      const data = await response.json()
      if (!response.ok)
        throw data.error
      setToken(response.headers.get("Authorization"))
      localStorage.setItem('referralCode', data.referral_code);
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo, setToken)
    window.location = "/"
    e.target.reset()
  }
  const handleClick = e => {
    e.preventDefault()
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br />
        Password: <input type="password" name='password' placeholder="password" />
        <br />
        <input type='submit' value="Login" />
      </form>
      <br />
      <div>Not registered yet, <Link to="/signup"> Sign up</Link> here. </div>
    </div>
  )
}
export default Login