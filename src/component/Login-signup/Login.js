import React, { useState } from 'react'
import './css/Register.css';
import NavRegister from './NavRegister'
import { useNavigate } from "react-router-dom";
var validator = require("email-validator");



function Login() {
    const navigate = useNavigate()
    const [IsRight, setIsRight] = useState(true)
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    // eslint-disable-next-line no-unused-vars
    const [authenticated, setauthenticated] = useState((localStorage.getItem("authenticated") || false));
    const users = [{ username: "test@gmail.com", password: "testpassword" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(validator.validate(username));
        if (validator.validate(username)) {
            const account = users.find((user) => user.username === username);
            if (account && account.password === password) {
                localStorage.setItem("authenticated", true);
                setauthenticated(true)
                navigate("/dashboard");

            }
            else {
                localStorage.setItem("authenticated", false);
                setIsRight(false)

            }
        }
    };
    return (
        <>
            <nav>
                <NavRegister />
            </nav>
            <div className='login register'>
                <p className="greet">Welcome Back!</p>
                <div className="login-component register-component">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login-input register-input">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" id='login-email' required value={username}
                                onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div className="login-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" value={password} id='login-password' required onChange={(e) => setpassword(e.target.value)} />
                            <span id='incorrect-creds' style={{ display: IsRight ? 'none' : 'block' }}>Email id or password is incorrect</span>
                        </div>
                        <input className='btn' id='btn-login' value="Submit" type="submit" />
                    </form>
                </div>
                <p className='logOrSign' onClick={() => {
                    navigate("/signup")
                }}>Want to register? Signup</p>
            </div>
        </>

    )

}

export default Login;