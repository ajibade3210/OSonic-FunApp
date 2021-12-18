import React, {useState} from 'react';
import './navbar.css';
import {SiAnaconda} from 'react-icons/si';
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import Button from '../UI/button/Button';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="container navbar">
           <div className="logo">
               <SiAnaconda color="#fff" size={45}/>
               <p className="logo-text">
                   Sonic<span>X</span>
               </p>
           </div>
           <menu>
            <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#subscribe">Subscribe</a></li>
                 <li className="nav-btn">
                    <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"}/>
                </li>
            </ul>
           </menu>
           <div className="menu-icons" onClick={()=> setShowMenu(!showMenu)}>
               {
                   showMenu
                   ? <RiCloseLine color="#fff" size={33} />
                   : <AiOutlineBars color="#fff" size={33}  />
               }
           </div>
        </nav>
    )
}

export default Navbar