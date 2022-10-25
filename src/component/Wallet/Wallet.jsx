import React, {useState} from 'react'
import './css/wallet.css'
import MainNavbar from '../Navbar/MainNavbar'
import Amount from './Amount'
import Transactions from './Transactions'
import Withdrawal from './Withdrawal'
import AddMoney from './AddMoney'


const Wallet = () => {
    return(
        <>
        <MainNavbar />
        <div className="walletContainer">
            <Withdrawal/>
            <AddMoney />
        <div className="upperComponent">
        <h3 className='greeting'>Hey User! <br />
       You can check your <br />
       wallet and transactions here.
       </h3>
       <Amount/>
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