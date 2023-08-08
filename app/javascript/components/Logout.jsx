import React from "react"
const Logout = ({ }) => {
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "delete",
        headers: {
          "content-type": "application/json",
          "authorization": localStorage.getItem("token")
        },
      })
      const data = await response.json()
      if (!response.ok) throw data.error
      localStorage.removeItem('userToken');
      window.location = "/"
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleClick = e => {
    e.preventDefault()
    logout()
  }
  return (
    <div>
      <input type="button" value='Logout' onClick={handleClick} />
    </div>
  )
}
export default Logout