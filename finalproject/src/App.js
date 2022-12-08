//importing needed scripts
import React from 'react';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import FindACause from './components/FindACause';
import HowItWorks from './components/HowItWorks';
import StartAFund from './components/StartAFund';
import ContactUs from './components/ContactUs';
import { Route, Routes} from 'react-router-dom';

//used React Router to change view in DOM instead of navigating between files
export default function App () {

  return(
    //added in Navbar component
  <>
  <NavBar />
  <div>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/HowItWorks" element = {<HowItWorks />} />
      <Route path="/FindACause" element = {<FindACause />} />
      <Route path="/StartAFund" element = {<StartAFund />} />
      <Route path="/ContactUs" element = {<ContactUs />} />
    </Routes>
  </div>
  </>

  )
}





