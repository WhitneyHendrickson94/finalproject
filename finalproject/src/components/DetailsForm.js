import React, { useState } from 'react';
//create functional component for a Details Form and employed use of state hooks

export const DetailsForm = (props) => {
    const [purpose, setPurpose] = useState('');
    const [story, setStory] = useState('');
    const [goal, setGoal] = useState('');

//handle submission a form holding new fund information
    const onSubmit = (e) => {
        e.preventDefault(); //keeps page from refreshing
        if(purpose && story && goal) {
            props.addDetails({purpose,story,goal}); 
            setPurpose('');
            setStory('');
            setGoal('');
        }else {
            console.log('invalid input');
        }
    };
//Returning to the DOM 
    return(
        <div id="new-student-form" className="card border-info mb-3" style={{maxwidth: "20rem"}}>
            <h6 className="card-header">Add Details</h6>
            <form onSubmit={onSubmit}>
                <input 
                className="form-control form-control-sm"
                type='text'
                placeholder='Purpose'
                onChange= {(e) => setPurpose(e.target.value)} //getting value of student name input fields
                value={purpose}
                />
                <input 
                className="form-control form-control-sm"
                type='text'
                placeholder='Story'
                onChange= {(e) => setStory(e.target.value)} //getting value of student name input fields
                value={story}
                />
                <input
                className="form-control form-control-sm"
                type='text'
                placeholder='Goal'
                onChange={(e) => setGoal(e.target.value)} //getting value of goal input field 
                value={goal}
                />
                <button className="btn btn-secondary btn-sm" type='submit'>Add Details</button>
            </form>
        </div>
    )
};