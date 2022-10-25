import React, {useState} from 'react'
import './css/navbar.css'
import Logo from '../../images/Logo.png'
import hamburger from "../../images/hamburger.svg"
import close from "../../images/close.svg"
import { useNavigate, NavLink } from 'react-router-dom';

const MainNavbar = () => {
    const[IsnavOpen, setIsnavOpen]=useState(false);
    
    const navigate = useNavigate()

//     const setActiveLink = (e) => {
//     const navLinks= document.getElementsByClassName("nav-link")
//     // console.log(navLinks);
//     for(let i=0; i<navLinks.length; i++){
//         navLinks[i].addEventListener('click', (e)=>{
//             console.log(e.target)
//         })
//     }
//   }
//   setActiveLink()
  
  return (
    <div>
        <nav className="mobile-navlinks" id={IsnavOpen? "openNav":"closedNav"}  >
            <img src={close} alt="" id='close'  onClick={()=>setIsnavOpen(false)}/>
            <ul>
                    <li onClick={()=>{navigate("/dashboard");setIsnavOpen(false)}}>Dashboard</li>
                    <li onClick={()=>{navigate("/newInvestment");setIsnavOpen(false)}}>New Investment</li>
                    <li>My Investments</li>
                    <li onClick={()=>{navigate("/wallet");setIsnavOpen(false)}}>Wallet</li>
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
                    <li  className="nav-link">
                        <NavLink className={({isActive})=> isActive? "active-nav-link": ""} to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink className={({isActive})=> isActive? "active-nav-link": ""} to="/newInvestment">New Investment</NavLink> 
                    </li>
                    <li><NavLink className={({isActive})=> isActive? "active-nav-link": ""} to=" " onClick={(e)=>e.preventDefault()}>My Investments</NavLink></li>
                    <li className="nav-link">
                        <NavLink className={({isActive})=> isActive? "active-nav-link": ""} to="/wallet">Wallet</NavLink> 
                    </li>
                    <li  className="nav-link">
                        <NavLink className={({isActive})=> isActive? "active-nav-link": ""} to="/contactUs">Contact Us</NavLink> 
                    </li>
                    <li className='profile-link nav-link'>
                        <NavLink className={({isActive})=> isActive? "active-nav-link": ""} to="/profile">Jhon Doe</NavLink>
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
