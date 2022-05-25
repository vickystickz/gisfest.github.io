import '../styles/coming-soon.css';
import logo from '../media/icons/Logo.svg';
import TypeAnimation from 'react-type-animation';
import { FaInstagram, FaTwitter,FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialMediaLinks } from '../utils/data';
import React from 'react';

const ComingSoonPage = () => {
  return (
    <>
        <div className='container'>
        
          <header className='header'>
            <TypeAnimation className="animation-text"
            cursor={false}
            sequence={['Coming Soon....',5000, '']}
            wrapper="h1"
            repeat={Infinity}
          />
            <p>Anticipate!!!  GISfest Conference</p>
          </header>

          <div className='about_section'>
              <div className='about_section-info'>
                <h2>GISfest 2022</h2>
                <p>The GISfest is a conference bringing together Geospatial professionals and enthusiats to discuss Geospatial technologies and it's application in numerous industries.</p>
              </div>
              <div className='about_section-logo'>
                <img src={logo} alt='gisfest_logo'/>
              </div>
          </div>

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
                        socialMediaLinks.map((id,links)=>{
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
        
        </div>               
        <footer className='footer_section'>
                <div className='footer_container'>
                    <div className='brand-red'></div>
                    <div className='brand-green'></div>
                    <div className='brand-yellow'></div>
                    <div className='brand-purple'></div>
                </div>
                <p>&copy; Copyright <strong><span>GISfest {new Date.now.getFullYear()}</span></strong>. All Rights Reserved</p>
        </footer>
      </>
  
  )
}

export default ComingSoonPage;
