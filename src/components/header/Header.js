import React, {useEffect} from 'react';
import './header.css';
import ringsonic from '../../assets/ringsonic.png';
import Button from '../UI/button/Button';
import {GrGamepad} from 'react-icons/gr';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(()=> {
        AOS.init({
            duration: 1000,
        });
    },[])

    return (
        <section id="header">
            <div className="container header">
                <div className="header-left" data-aos="fade-right">
                    <h1>
                        <span>The World's Leading</span>
                        <span>Cross-platform</span>
                        <span>Super Hero</span>
                    </h1>
                    <p className="u-text-small u-text-light">SonicX site is just a trial site created by a big fan of Sonic's, The goal is to explore React js and catch fun while at it. <br/>sit amet consectetur adipisicing elit. Ex, omnis?</p>
                <div className="header-cta">
                    <Button text={"Get Started"} btnClass={"btn-dark"} href={"#download"}/>
                    <Button text={"Fun Facts"} btnClass={"btn-orange"} href={"#faq"}/>
                </div>
                </div>
                <div className="header-right" data-aos="fade-left">
                    <img src={ringsonic} alt="phone" />
                </div>
            </div>
            <div className="floating-icon" data-aos="zoom-out-up">
                <a href="#features">
                    <GrGamepad color="#fff" size={35} className="mouse"/>
                </a>
            </div>
        </section>
    )
}

export default Header