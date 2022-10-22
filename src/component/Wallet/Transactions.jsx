import React from "react";
import './css/transactions.css'
import transactions from "../../UserTransactions/transactions";

const Transactions = () => {
  return (
    <>
      <div className="transTable">

        {transactions.map((transaction, index) => {
          return (
            <>
            <div className="transactionDetail" key={index}>
            <p>On {transaction.date} at {transaction.time} of amount {transaction.amount} from account {transaction.accountNo}</p>
            </div>
            <hr />
            </>
            
          )
        })}


      </div>
    </>
  )
}

export default Transactions;
