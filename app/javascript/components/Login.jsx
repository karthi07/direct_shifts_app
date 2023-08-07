import React from "react"
import { Link } from "react-router-dom";

import { useRef } from "react"
const Login = ({ setToken }) => {
    const formRef = useRef()
    const login = async (userInfo) => {
        const url = "http://localhost:3000/login"
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
        login(userInfo)
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