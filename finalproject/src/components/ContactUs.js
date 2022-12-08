import React from 'react';
import {useState} from 'react';
//created a contact us form using state hooks to get state of changed in form
export default function ContactUs () {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for contacting us! We'll reach out shortly!`)

        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }
    return (
        <>
        <h2>Contact Us</h2>
        
        <form onSubmit={handleSubmit}>
        <div id="contactform" className="form-group">
            <label className="col-form-label col-form-label-lg mt-4" for="inputLarge">Contact Information</label><br/>
            <input className="form-control form-control-lg" type="text" placeholder="Name" id="inputLarge" value={name} onChange={event => setName(event.target.value)}></input><br/>
            <input className="form-control form-control-lg" type="text" placeholder="Phone Number" id="inputLarge" value={phone} onChange={event => setPhone(event.target.value)}></input><br/>
            <input className="form-control form-control-lg" type="text" placeholder="Email" id="inputLarge" value={email} onChange={event => setEmail(event.target.value)}></input><br/>
            <label for="exampleTextarea" className="form-label mt-4"></label>
            <textarea className="form-control" placeholder="Write us your message here." rows="3" value={message} onChange={event => setMessage(event.target.value)}></textarea><br/>
            <fieldset className="form-group">
            <legend className="mt-4">Choose your preferred contact method: </legend>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                <label className="form-check-label" for="optionsRadios1">
                Phone
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                <label className="form-check-label" for="optionsRadios2">
                Email
                </label>
            </div>
            </fieldset> <br/><br/>
            <button id="submitMessage" type="submit" className="btn btn-info btn-lg">Submit Your Message</button>
        </div>
        </form>
        </>
    )
};