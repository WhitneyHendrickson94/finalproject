import React from 'react';
import { NewFundForm } from './NewFundForm.js'


export default function StartAFund () {
    return (
        //added a form to create a new fund and direction on how to add details to a fund
        <>
        <h2>Start A Fund</h2>
        <p>Once you've created a name for your Fund, find it in our library of funds, <a href="/FindACause">here</a>, to add your details.</p>
        <NewFundForm />
        </>
    )
}