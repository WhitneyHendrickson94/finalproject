import React from 'react';
import { DetailsForm } from './DetailsForm'; //imported DetailsForm to have access to it
//Added functional component of Session
export const Fund = (props) => {
    const {fund, updateFund, deleteFund} = props;

    const deleteDetails = (detailsId) => {             //Added function to delete details
        const updatedFund = {
             ...fund, 
            details: fund.details.filter((x) => x.id !== detailsId)
        };
        updateFund(updatedFund);
    }

    const addDetails = (detail) => {                //Added function to add details
        let index = fund.details.length;
        updateFund({...fund, details: [...fund.details, {purpose: detail.purpose, story: detail.story, goal: detail.goal, id: index}]});
    }

    const details = () => (                            //Added function to actually add new students to list on DOM under each fund
        <ul>
            {fund.details.map((detail, index) =>(
                <li key= {index}>
                    <label>
                    <div class="card-body">
                    <h5 class="card-title">{`${detail.purpose}`}</h5>
                    <div class="card-body">
                    <p class="card-text">{`${detail.story}`}</p><br></br><br></br>
                    <p class="card-text">{`Goal Amount: ${detail.goal}`}</p>
                    </div>
                    </div>
                    </label>
                    <button className = "btn btn-secondary btn-sm" onClick={(e) => deleteDetails(detail.id)}>Delete Details</button>
                </li>
                

            ))}
        </ul>
    );

    const deleteClick = (e) => {        //adding event handle for deleting a session
        deleteFund(fund.id);
    }

    return( //returning what is displayed on the DOM for each Session Card
            <div id= "fundCard" className="card border-success mb-3">
            <h2 className="card-header">{fund.name} </h2> 
            <button id="donateButton" className="btn btn-info">Donate Now!</button>
            <div className = "card-body">
            {
                details({details, fundId: fund.id, deleteDetails}) //body of card holds the students added to the sessioon
            }

            <h4>Progress</h4>
            <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div><br></br><br></br>
            <DetailsForm addDetails={addDetails} />
            </div>
    
            <button onClick={deleteClick} className="btn btn-info">Delete Fund</button> 
            
     
          
            </div>
        
    );
};