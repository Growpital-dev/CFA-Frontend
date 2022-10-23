import React from "react";
import './css/myInvestment.css'
import MainNavbar from '../Navbar/MainNavbar'
import InvestMore from "./InvestMore";
import TotalInvestment from "./TotalInvestment";
import TotalProfit from "./TotalProfit";
import ActiveInvestments from "./ActiveInvestments";
import CompletedInvestments from "./CompletedInvestments";

const myInvestment = () => {
    return(
        <>
        <MainNavbar />
        <div className="myInvestment-container">
            <div className="upperContainer">
            <p className="greeting">Hey there! You can find about your investment here.</p>
            <InvestMore />
            </div>
            <div className="total">
                <TotalInvestment />
                <TotalProfit />
            </div>
            
        </div>
        </>
    )
}

export default myInvestment;