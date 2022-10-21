import React, {useState} from 'react'
import "./css/newInvestment.css"
import MainNavbar from '../Navbar/MainNavbar'
import plans from "../../PlansData/plansData"

const NewInvestment = () => {
    // eslint-disable-next-line no-unused-vars
    const [IsPlanSelected, setIsPlanSelected] = useState(false)
  return (
    <>
    <MainNavbar/>
    <div className="new-investment-sec">
        <h1 className='new-investment-heading'>
            Hey USERNAME,<br />
           Multiplying your money isn't as difficult as you think.
        </h1>
        <div className='new-investment-plans'>
            <p className='landing-para landing-plan-para'>We Currently have three plans avialable  <br />
            Choose wisely as per your needs and investment capacity</p><br />
            <div className="investment-plans">
                {plans.map((plan, index)=>{
                    return(
                        <div className="investment-plan" key={index} >
                            <h1>{plan.plan_name}</h1><br />
                          {plan.min_limit !== ""?  <p>Deposit ₹ {plan.min_limit} - ₹{plan.max_limit} </p>: <p>Deposit ₹{plan.max_limit} </p>}
                            <br /><p>Lock-in Period {plan.lockin_period}</p><br />
                            <p>Rate of Interest {plan.ROI} p.a.</p><br />
                            <p>{plan.maturity_period} maturity period</p>
                            <button className='select-plan-btn' value={plan.plan_name} onClick={(e)=>{
                                // console.log(e.target.value);
                            }}>Select</button>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default NewInvestment