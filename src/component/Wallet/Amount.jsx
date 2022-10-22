import React from "react";
import './css/amount.css'
import walletLogo from "../../images/fluency-wallet.png"

 const Amount = () => {
return(
    <>
    <div className="amountComponent">
        <img src={walletLogo} alt="wallet" className="walletLogo"/>
        <div className="walletContent">
            <p className="wallet-balance">₹ 50000</p>
            <div className="wallet-btn-grp">
                <button className="wallet-add-money-btn">Add Money</button>
                <button className="wallet-withdraw-money-btn">Withdraw</button>
            </div>
        </div>
    </div>
    </>
)
}

export default Amount