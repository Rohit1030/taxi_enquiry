import React from 'react'
import { FaTachometerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdBookOnline } from "react-icons/md"
import { BsCalculatorFill } from "react-icons/bs"
import "./Chooseus.css";

const Chooseus = () => {
  return (
    <section id='why-choose-us' className='common-width' title='Why-choose-us'>
      <h1>WHY CHOOSE US</h1>
      <p className='common-para'>
        When you’re looking for a good, reliable taxi service in Greater Perth, there are plenty of good reasons to choose us. We’ll highlight a few of those reasons below, but for the full list of benefits of using our services, go to Why choose Quick Taxi Perth.
      </p>
      <p className='common-para'>•&nbsp;<strong>No call-out fee:</strong>&nbsp;At Quick Taxi Perth, we don’t charge a call-out fee (save $1.50) •&nbsp;<strong>Meter or fixed fare:</strong>&nbsp;Choose meter fare or opt for a set price to avoid surprises •&nbsp;<strong>Standard taxi rates:</strong>We provide premium services at standard taxi rates (normal tariffs) •&nbsp;<strong>Direct communication:</strong>&nbsp;Speak directly to the taxi driver, not just some phone operator •<strong>Arrival alerts:</strong>&nbsp;Get a text message when we’re 10 minutes away (free service) •&nbsp;<strong>Online taxi fare calculator:</strong>&nbsp;Estimate your taxi fare with our online calculator •<strong>&nbsp;Group transfers:</strong>&nbsp;Efficient transfers of large groups is one of our specialties</p>
      <div className="why-choose-icons">
        <div className="why-us-icons">
            <div>
            <IoMdCall className='icon'/>
            </div>
            <h4>No call-out fee</h4>
        </div>
        <div className="why-us-icons">
            <div>
            <FaTachometerAlt className='icon'/>
            </div>
            <h4>Fixed fare</h4>
        </div>
        <div className="why-us-icons">
            <div>
            <MdBookOnline className='icon'/>
            </div>
            <h4>Book Online</h4>
        </div>
        <div className="why-us-icons">
            <div>
            <FaMoneyBillAlt className='icon'/>
            </div>
            <h4>Standard rates</h4>
        </div>
        <div className="why-us-icons">
            <div>
            <BsCalculatorFill className='icon'/>
            </div>
            <h4>Fare calculator</h4>
        </div>
      </div>
     </section>
  )
}

export default Chooseus