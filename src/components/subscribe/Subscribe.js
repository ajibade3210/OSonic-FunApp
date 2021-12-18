import React from 'react';
import './subscribe.css';
import {TiSocialGooglePlus} from 'react-icons/ti';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {IconContext} from 'react-icons';

const Subscribe = () => {
    return (
       <section id="subscribe">
           <div className="container subscribe">
               <h2>Subscribe now!</h2>
               <form action="">
                   <div className="form-control">
                       <input type="text" placeholder="Enter Your Email..." />
                       <button>Subscribe</button>
                   </div>
               </form>
               <IconContext.Provider value={{size: "20"}}>
               <div className="social-icons">
                   <div className="social-icon">
                       <TiSocialGooglePlus/>
                   </div>
                   <div className="social-icon">
                       <FaFacebookF/>
                   </div>
                   <div className="social-icon">
                       <FaTwitter/>
                   </div>
                   <div className="social-icon">
                       <FaInstagram/>
                   </div>
               </div>
               </IconContext.Provider>
           </div>
       </section>
    )
}

export default Subscribe