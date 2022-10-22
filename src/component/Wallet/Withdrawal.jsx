import React from "react";
import './css/money.css'
import close from "../../images/close.svg"


const Withdrawal = () =>{
    return(
        <>
        <div className="container">
            <div className="top">
            <h2>Withdraw Money</h2>
            <img src={close} alt="close" className="close" />
            </div>
            
            
            <div className="label">
            <label htmlFor="amount">Amount</label><br />
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="please enter an amount" />
            </div>
            <div className="label">
            <label htmlFor="account">To Account</label><br />
            <div className="accountInput">
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="34567898765456756789" />
            
            </div>
            
            </div>
            <button type="button" className="btn btn-light">Withdraw Money</button>
            
        </div>
        </>
    )
}

export default Withdrawal;