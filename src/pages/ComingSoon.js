import '../styles/coming-soon.css';
import logo from '../media/icons/Logo.svg';
import TypeAnimation from 'react-type-animation';
import { FaInstagram, FaTwitter,FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialMediaLinks } from '../utils/data';
import React from 'react';

const ComingSoonPage = () => {
  return (
        <div className='container'>
        
          <header className='header'>
            <TypeAnimation className="animation-text"
            cursor={false}
            sequence={['Coming Soon....',5000, '']}
            wrapper="h1"
            repeat={Infinity}
          />
          </header>

          <section className='about_section'>
              <div className='about_section-info'>
                <h2>#GISfest 2022</h2>
                <p>The GISfest is a conference bringing together Geospatial professionals and enthusiats to discuss Geospatial technologies and it's application in numerous industries.</p>
              </div>
              <div className='about_section-logo'>
                <img src={logo} alt='gisfest_logo'/>
              </div>
          </section>

          <div className='contact_section'>
              <div className='contact_section_email'>
                  <h2>Reach us at:</h2>
                  <a href='mailto:gisfestival@gmail.com'><FaEnvelope className='icon' /> gisfestival@gmail.com</a>
              </div>
              <hr></hr>
              <div className='contact_section_socialmedia'>
                    <h2>Follow us on:</h2>
                    <div className='socialmedia_links'>
                      {
                        socialMediaLinks.map((links,id)=>{
                          const {url,handle,social} = links;
                          return(
                            <a href={url} key={id} target="_blank" rel="noreferrer noopener">
                            {social==='Twitter'&&<FaTwitter className='icon'/>}
                            {social==='Instagram'&&<FaInstagram className='icon'/>}
                            {social==='Linkedin'&&<FaLinkedin className='icon'/>}
                            {handle}
                            </a>
                          )
                          
                        })
                      }
                    </div>
              </div>
      
        
        </div>               
        <footer className='footer_section'>
          <h3>&copy; Copyright <strong><span>GISfest Tech. Team {new Date().getFullYear()}</span></strong>. All Rights Reserved.</h3>
        </footer>
      </div>
  
  )
}

export default ComingSoonPage;
