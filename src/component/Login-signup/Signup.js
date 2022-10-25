import React from 'react';
import './css/Register.css';
import NavRegister from './NavRegister';
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    return (
        <>
            <nav>
                <NavRegister />
            </nav>
            <div className='signup register'>
                <p className='greet'>Hey!</p>
                <div className="signup-component register-component">
                    <h1>Signup</h1>
                    <form>
                        <div className="signup-input register-input">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" required />
                        </div>
                        <div className="signup-input register-input">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" required />
                        </div>
                        <div className="signup-input register-input">
                            <label htmlFor="password">Password</label><br />
                            <input type="password" required />
                        </div>
                        <button className='btn signupBtn' id='btn-signup'>Signup</button>
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
