import React from "react";
import './css/amount.css'
import walletLogo from "../../images/fluency-wallet.png"
import AddMoney from './AddMoney'
import Withdrawal from './Withdrawal'
 const Amount = () => {
return(
    <>
    <div className="amountComponent">
        <img src={walletLogo} alt="wallet" className="walletLogo"/>
        <div className="walletContent">
        {/* <h2 id="totalAmount">&#8377;50,000</h2>
        <button id="addMoney" type="button" class="btn btn-light my-btn">Add Money</button>
        <button id="withdrawal" type="button" class="btn btn-light my-btn">Withdrawal</button> */}
        </div>
        
    </div>
    </>
)
}

export default Amount