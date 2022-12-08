import React from "react";
import Logo from "../logo.png"

export default function NavBar(){
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <img className="logo" src={Logo} alt="talk about it logo"/>
  <div className="navbar-collapse collapse show" id="navbarColor02">
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <a className="nav-link active" href="/">Home
          <span className="visually-hidden">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/HowItWorks">How It Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/FindACause">Find A Cause</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/StartAFund">Start A Fund</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ContactUs">Contact Us</a>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
);

}