import React from "react"; 
import Jonnie from "../Jonnie.jpeg"
import George from "../George.jpg"
import Brian from "../Brian.jpg"
//created featured stories component to highlight featured storied on home page

export default function FeaturedStories(){

return(
<>

<h2>Featured Funds & Stories</h2>


<div className="container text-center">

    <div className="row">

        <div className="col">
            <div class="card mb-3">
            <h3 class="card-header">Jonnie's Device</h3>
            <div class="card-body">
            <h5 class="card-title">Jonnie Needs a New Device - His Broke</h5>
            <img id="storyPhoto" src={Jonnie} alt="Jonnie with his device" />
            <div class="card-body">
            <p class="card-text">Jonnie's most recent device has broken beyond repair. He uses an iPad with the communication app LAMP. Because his device is within a year of getting his device, our insurance will not pay for a new one. Jonnie uses his device all of the time and without being able to tell us what he wants to see, our por kiddo is havin multiple melt downs a day. We can redownload his application, we just need help getting a new iPad! Thank you! Anything helps!</p>
            </div>
            </div>
            </div>
        </div>
        
        
        <div className="col">
            <div class="card mb-3">
            <h3 class="card-header">George's BAHA</h3>
            <div class="card-body">
            <h5 class="card-title">George is Getting a Hearing Aid</h5>
            <img id="storyPhoto" src={George} alt="George" />
            <div class="card-body">
            <p class="card-text">George if getting a bone anchored hearing aid! The only problem is - I have recently been laid off from my job meaning no insurance. We need help to cover this already scheduled procedure!</p>
            </div>
            </div>
            </div>
        </div>


        <div className="col">
            <div class="card mb-3">
            <h3 class="card-header">Brian's Ears</h3>
            <div class="card-body">
            <h5 class="card-title">Brian is getting Cochlear Implants</h5>
            <img id="storyPhoto" src={Brian} alt="Brian" />
            <div class="card-body">
            <p class="card-text">Brian is one of the sweetest children you will ever meet! He's overcame so many struggles in his first year of life. Being born almost 3 1/2 months early left him with 
            many medical problems. One of those was profoudn hearing loss - in other words, Brian is deaf. This wasn't the only medical concern, though. 
            Brian spent months in the NICU battling difficulties with breathing and feeding. After many months in the NICU - he was finally able to come home. 
            Recently, we have gotten news that Brian has been cleared to receive cochlear implants! We are so excited for this for our baby, but we humbly come to a community who 
            values communication for everyone. After all of Brian's medical difficulties we are left with hefty medical bills - sometimes making it hard to make ends meet as is. 
            Our insurance will cover most of Brian's cochlear implant procedure, however, there will be a good chunk left for us to cover. We truly can't handle more debt right now, and are looking to 
            others for support and support of Brian!  </p>
            </div>
            </div>
            </div>
        </div>

    </div>

</div>


</>
);

}