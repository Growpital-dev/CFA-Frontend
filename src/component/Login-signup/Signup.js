import React, { useState } from 'react';
import './css/Register.css';
import NavRegister from './NavRegister';
import { useNavigate } from "react-router-dom";
import userCredentials from '../../userCredentials/userCredentials';


function Signup() {
    const navigate = useNavigate()
    const [userName, setuserName] = useState("")
    const [userMail, setuserMail] = useState('')
    const [userPassword, setuserPassword] = useState('')




    const submitSignupForm = (e) => {
        const userEntry = { userName: userName, userMail: userMail, password: userPassword, isVerified: false }
        e.preventDefault();
        userCredentials.push(userEntry);
        navigate("/login")
    }
    return (
        <>
            <nav>
                <NavRegister />
            </nav>
            <div className='signup register'>
                <p className='greet'>Hey!</p>
                <div className="signup-component register-component">
                    <h1>Signup</h1>
                    <form className='signup-form'>
                        <div className="signup-input register-input">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" required value={userName}
                                onChange={(e) => setuserName(e.target.value)} />
                        </div>
                        <div className="signup-input register-input">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" required value={userMail}
                                onChange={(e) => setuserMail(e.target.value)} />
                        </div>
                        <div className="signup-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" required value={userPassword}
                                onChange={(e) => setuserPassword(e.target.value)} />
                        </div>
                        <button className='btn signupBtn' id='btn-signup' type='submit' onClick={submitSignupForm}>Signup</button>
                    </form>
                </div>
                <p className='logOrSign' onClick={() => {
                    navigate("/login")
                }}>
                    Already registered? Login
                </p>

            </div>
        </>

    )
}

export default Signup
