import React from 'react';
import FeaturedStories from "./FeaturedStories";
import CoverPhoto from "../CoverPhoto.webp"


export default function Home () {
    return (
        <>
        <container className="CoverInfo">
        <img className="CoverPhoto" src={CoverPhoto} alt="People communicating represented by speech/thought bubbles" />
        
        </container>

        <div className="OurMission">
            <h2>Our Mission</h2>
            <figure>
                <blockquote className="blockquote">
                <p className="mb-0">As a fundraising platform, our goal is to provide avenues for those with significant communication needs
                to be able to acquire and use technologies an accessories, whether low or high-tech, that will provide them with the basic human right 
                of communication. <br /> <br />
                
                Communication, in a variety of forms, is essential in having a functional, healthy life in the environment around you. Those who may require other forms of communication
                outside of the traditional speaking with your mouth and hearing with your ears may miss out on this fundamental ability. 
                Other methods can be expensive. Health insurance may not be available to some individuals to cover these technologies for a variety of reasons, or costs on
                top of insurance coverage may be too expensive for families. 
                <br />  <br /> 
                Our platform is designed to help families and caregivers to promote a need
                and reach out to other friends, families, and compassionate humam beings to help provide for these individuals.</p>
                </blockquote>
            </figure>
        </div>

        
        <div>
            <FeaturedStories />
        </div>

       
        </>
    );
}