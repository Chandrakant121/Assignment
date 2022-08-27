import { useState } from 'react'
import Navbar from "./Navbar"
import "./Style.css"
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        // Clicking on a "Submit" button, prevent it from submitting a form.
        event.preventDefault()
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        // got promise resolve
        // console.log(data)
        const data = await response.json()
        console.log(data)


        if (data.user === "a@gmail.com") {
            navigate("/dashboard")
        }
        if (data.user) {
            // localStorage.setItem("logindetail", JSON.stringify(logininfo))
            // console.log(data)
            // if (data.email === "a@gmail.com") {
            //     alert("admin")
            //     navigate("/dashboard")
            // }

            alert('Login successful')
            // window.location.href = '/dashboard'
            navigate("/")
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='login'>
                <h1>Login</h1>
                <form onSubmit={loginUser}>
                    <div>
                        <input
                            className='inputdiv'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className='inputdiv'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <input className='inputdivbtn' type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login