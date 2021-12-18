import React, { useEffect } from 'react';
import './features.css';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import phoneFeatures from '../../assets/citysonic.png';
import Feature from './Feature';
import {FeatureList} from './data.js'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(()=> {
        AOS.init({
            duration: 1000,
        });
    },[])
    return (
       <section id="features">
           <div className="container features">
               <div className="u-title">
                   <BsFillBookmarkStarFill color="orangered" size={30}/>
                   <h2>Core Features</h2>
                   <p className="u-text-small u-text-dark">
                       SonicX app has Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellendus similique vel officia error nesciunt.
                   </p>
               </div>
               <div className="features-content">
                   <div className="features-left" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <img src={phoneFeatures} alt="phone" />
                   </div>
                   <div className="features-right">
                        {
                            FeatureList.map((feature)=> (
                                <Feature key={feature.id}
                                 icon={feature.icon}
                                  heading={feature.heading}
                                   text={feature.text}/>
                            ))
                        }
                   </div>
               </div>
           </div>
       </section>
    )
}

export default Features