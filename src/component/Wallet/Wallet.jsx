import React from 'react'
import './css/wallet.css'
import MainNavbar from '../Navbar/MainNavbar'
import Amount from './Amount'
import Transactions from './Transactions'
// import AddMoney from './AddMoney'
// import Withdrawal from './Withdrawal'

const Wallet = () => {
    return(
        <>
        <MainNavbar />
        <div className="walletContainer">
        <div className="upperComponent">
        <h3 className='greeting'>Hey User! <br />
       You can check your <br />
       wallet and transactions here.
       </h3>
       <Amount />
       </div>
       <div className="transactions">
       <h4 className='trans-heading'>All Transactions</h4>
       <Transactions />
       </div>
        </div>
        
       
        </>
    )
}

export default Wallet