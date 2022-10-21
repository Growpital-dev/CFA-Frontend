import React, {useState} from 'react'
import './css/navbar.css'
import Logo from '../../images/Logo.png'
import hamburger from "../../images/hamburger.svg"
import close from "../../images/close.svg"
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {
    const[IsnavOpen, setIsnavOpen]=useState(false);
    
    const navigate = useNavigate()
  return (
    <div>
        <nav className="mobile-navlinks" id={IsnavOpen? "openNav":"closedNav"}  >
            <img src={close} alt="" id='close'  onClick={()=>setIsnavOpen(false)}/>
            <ul>
                    <li onClick={()=>{navigate("/dashboard");setIsnavOpen(false)}}>Dashboard</li>
                    <li onClick={()=>{navigate("/newInvestment");setIsnavOpen(false)}}>New Investment</li>
                    <li>My Investments</li>
                    <li>Wallet</li>
                    <li onClick={()=>{navigate("/contactUs");setIsnavOpen(false)}}>Contact Us</li>
                    <li onClick={()=>{navigate("/profile");setIsnavOpen(false)}}>Profile</li>
                </ul>
        </nav>
       <nav className='main-navbar'>
            <div className='nav-logo'>
                <img src={Logo} alt=""  onClick={()=>{navigate("/login")}}/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li onClick={()=>{navigate("/dashboard")}}>Dashboard</li>
                    <li onClick={()=>{navigate("/newInvestment");setIsnavOpen(false)}}>New Investment</li>
                    <li>My Investments</li>
                    <li>Wallet</li>
                    <li onClick={()=>{navigate("/contactUs");setIsnavOpen(false)}}>Contact Us</li>
                    <li className='profile-link'>
                        {/* <div className="avatar"></div> */}
                        <p className="profile-name" onClick={()=>{navigate("/profile");setIsnavOpen(false)}} >Jhon Doe</p>
                        
                    </li>
                </ul>
            </div>
            <div className="hamburger">
                <img src={hamburger} alt="" onClick={()=>setIsnavOpen(true)}  />
            </div>
       </nav>
    </div>
  )
}

export default MainNavbar