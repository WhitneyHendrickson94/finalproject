import React from 'react';
import { talkFundApi } from '../rest/TalkFundApi';
//adding a functional component for adding a new fund
export const NewFundForm = (props) => {
//function for handliing submission of form holding fund data; using async and await are key to only have this portion of the DOM update w/o refreshing
    const onSubmit = async (e) => {
        e.preventDefault(); //keeps page from refreshing
        let name = document.getElementById("create-fund").value; //getting value of input field by using it's ID
        await talkFundApi.create({name: name, details: [] });
        props.fetchFunds();
        document.getElementById("create-fund").value = '';
    }
    return(
        <div className= 'card text-white border-info mb-3' style={{maxwidth: "20rem"}}>
            <h4 className="card-header bg-info">Create New Fund</h4>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <input className="form-control form-control-lg" type="text" placeholder= "Fund Name" id="create-fund"></input>
                    <button type="submit" className="btn btn-outline-info">Add Fund</button>
                </form>
            </div>
        </div>
    );
};