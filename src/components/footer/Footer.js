import React from 'react';
import './footer.css';
import { FaMapMarkedAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/logo.png';


const Footer = () => {
    return (
       <footer id="footer">
           <div className="container footer">
               <div className="footer-box">
                   <h4>Useful Links</h4>
                   <div className="footer-links">
                       <a href="/">&bull; Support</a>
                       <a href="/">&bull; About</a>
                       <a href="/">&bull; Learn</a>
                       <a href="/">&bull; Hosting</a>
                       <a href="/">&bull; Messenger</a>
                   </div>
               </div>
               <div className="footer-box">
                   <h4>Support</h4>
                   <div className="footer-links">
                        <a href="/">&bull; Support</a>
                        <a href="/">&bull; About</a>
                        <a href="/">&bull; Learn</a>
                        <a href="/">&bull; Hosting</a>
                        <a href="/">&bull; Messenger</a>
                   </div>
               </div>
               <div className="footer-box">
                   <h4>Contact Us</h4>
                   <div className="footer-contact">
                       <p>
                           <FaMapMarkedAlt/> &nbsp; Address: United States.
                       </p>
                       <p>
                           <FaPhoneAlt/> &nbsp; Phone: +2348055966944.
                       </p>
                       <p>
                           <FaFax/> &nbsp; Fax: +12345678.
                       </p>
                       <p>
                           <FaEnvelope/> &nbsp; Email: holaszyd1@gmail.com.
                       </p>
                       <p>
                           <FaGlobe/> &nbsp; Website: www.deXter.com.
                       </p>
                   </div>
               </div>
               <div className="footer-box">
                   <img src={logo} alt="logo" />
                   <p className="u-small-text">&copy; Copyright 2021. SonicX.com Mockup Site</p>
               </div>
           </div>
       </footer>
    )
}

export default Footer