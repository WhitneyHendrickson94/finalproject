import React from 'react';
import Step1 from '../Step1.png';
import Step2 from '../Step2.png';
import Step3 from '../Step3.png';



export default function HowItWorks () {
    return (
        <>
        
        <div className="FundSteps">
       
        <h2>How It Works</h2><br/><br/>
        <div className="container align-left">
        <h3>Create A Fund</h3><br/>
        <div className="row">
            <div className="col">
            <img className="StepNumber" src={Step1} alt="Step One" />
            </div>
            <div id="StepInformation" className="col">
            <p>Submit a Fund through our <a href="/StartAFund">Start A Fund</a> form.</p>
            </div>
        </div>
        <div className="row">
        <div id="StepInformation" className="col">
        <p>Share with family, friends, and on your social media platforms.</p>
        </div>
        <div className = "col">
        <img className="StepNumber" src={Step2} alt="Step Two" />
        </div>
        </div>
        <div className="row">
        <div className="col">
        <img className="StepNumber" src={Step3} alt="Step Three" />
        </div>
        <div id="StepInformation" className="col">
        <p>Watch your fund grow & see the support for your loved one.</p>
        </div>
        </div>
        </div><br/><br/><br/>

        <div className="container align-left">
        <h3>Support A Fund</h3><br/>
        <div id="StepInformation" className="row">
            <div className="col">
            <img className="StepNumber" src={Step1} alt="Step One" />
            </div>
            <div id="StepInformation" className="col">
            <p>Find a cause you want to support. Search for one <a href="/FindACause">here</a>.</p>
            </div>
        </div> 
        <div id="StepInformation" className="row">
        <div id="StepInformation" className="col">
        <p>Choose an amount to donate by paying with our secure payment options - PayPal, card, or ACH payments through your bank.</p>
        </div>
        <div className = "col">
        <img className="StepNumber" src={Step2} alt="Step Two" />
        </div>
        </div>
        <div id="StepInformation" className="row">
        <div className="col">
        <img className="StepNumber" src={Step3} alt="Step Three" />
        </div>
        <div  className="col">
        <p id="StepInformationText" >Sign Up for notifications to see when your chosen fund reaches their goal towards giving the supported individual the gift of communication</p>
        </div>
        </div>
        </div><br/>
        </div>


</>


    )
}