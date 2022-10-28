import React, { useState } from 'react'
import './css/Register.css';
import NavRegister from './NavRegister'
import userCredentials from '../../userCredentials/userCredentials';
import { useNavigate } from "react-router-dom";
var validator = require("email-validator");




function Login(props) {

    const changeLoggedInState = (value) => {
        props.checkLoggedIn(value)
    }


    const navigate = useNavigate()

    const [IsRight, setIsRight] = useState(true)
    const [userMail, setuserMail] = useState("");
    const [password, setpassword] = useState("");

    // eslint-disable-next-line no-unused-vars
    const [authenticated, setauthenticated] = useState((localStorage.getItem("authenticated") || false));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validator.validate(userMail)) {
            const account = userCredentials.find((user) => user.userMail === userMail);
            if (account && account.password === password) {
                localStorage.setItem("authenticated", true);
                setauthenticated(true);
                if (account.isVerified) {
                    navigate("/dashboard");
                }
                else {
                    navigate("/profileVerification");
                }
                changeLoggedInState(true)



            }
            else {
                localStorage.setItem("authenticated", false);
                setIsRight(false)
                changeLoggedInState(false)

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
                            <input type="email" id='login-email' required value={userMail}
                                onChange={(e) => setuserMail(e.target.value)} />
                        </div>
                        <div className="login-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" value={password} id='login-password' required onChange={(e) => setpassword(e.target.value)} />
                            <span id='incorrect-creds' style={{ display: IsRight ? 'none' : 'block' }}>Email id or password is incorrect</span>
                        </div>
                        <input className='btn login-Btn' id='btn-login' value="Login" type="submit" />
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