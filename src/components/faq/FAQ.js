import React from 'react';
import './faq.css';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from './Question';
import {questions} from './data';

const FAQ = () => {
    return (
       <section id="faq">
           <div className="container faq">
           <div className="u-title">
                   <MdOutlineLibraryBooks color="orangered" size={30}/>
                   <h2>FAQS</h2>
                   <p className="u-text-small u-text-dark">
                       DeXter app has Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellendus similique vel officia error nesciunt.
                   </p>
               </div>
               <div className="questions">
                    {
                        questions.map((item)=> (
                   <Question title={item.title} answer={item.answer} key={item.id}/>
                        ))
                    }
               </div>
           </div>
       </section>
    )
}

export default FAQ