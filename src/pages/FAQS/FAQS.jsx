import React, {useState} from 'react';
import './FAQS.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import {FAQData } from '../../utils/data';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import SEO from '../SEO';
const FAQS = () => {
   const [click, setClick] = useState(false);
const handleDropdownClick = () =>{
  setClick(!click)
}


  return (
    <div className="main-content" id="#top">
    <SEO title={'FAQS -- GIS Festival 2022'} url={'https://gisfest.org/faqs'}/>
      <PageHeader title={'Frequently Asked Questions'} color={'#c91f64'} />
      <div className='page-content'>
        
          {FAQData.map((FAQ,id)=> {
            return (
              <div className='FAQ-container' >
              <div className='question-content flexbox' >
                   <h3>{FAQ.Question}</h3>
                   <div className='caret-icon' onClick={handleDropdownClick}  >
                    { FAQ.id === id ? <FaAngleUp className='icon' /> : <FaAngleDown className="icon" />}
                   </div>
              </div>
              <div className={click === FAQ.id ? "active-answer answer-content" : "answer-content"}>
                  <p>{FAQ.Answer}</p>
              </div>
              </div>  
            )

          })}
        </div>
    </div>
  )
}

export default FAQS
