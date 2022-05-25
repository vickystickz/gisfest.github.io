import './page.css';
import logo from './Logo.svg';
import TypeAnimation from 'react-type-animation';
import { FaBeer, FaInstagram, FaTwitter,FaLinkedin, FaEnvelope } from 'react-icons/fa';

const page = () => {
  return (
    <>
    <div className='container'>
      <div className='header'>
        <TypeAnimation className="animation-text"
        cursor={false}
        sequence={['Coming Soon....',5000, '']}
        wrapper="h1"
        repeat={Infinity}
       />
        <p>Anticipate!!!!  GISfest Conference page</p>
      </div>

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
              <a href=''><FaEnvelope className='icon' /> gisfestival@gmail.com</a>
          </div>
          <hr></hr>
          <div className='contact_section_socialmedia'>
                <h2>Follow us on:</h2>
                <div className='socialmedia_links'>
                <a href=""><FaInstagram className='icon'/>gisfest</a>
                <a href=""><FaTwitter className='icon'/> gis_fest</a>
                <a href=""><FaLinkedin className='icon'/>GIS FEST</a>
                </div>
          </div>
      </div>
    </div>

    <div className='footer_section'>
            <div className='footer_container'>
                <div className='color1'></div>
                <div className='color2'></div>
                <div className='color3'></div>
                <div className='color4'></div>
            </div>
            <p>&copy; Copyright <strong><span>GISfest</span></strong>. All Rights Reserved</p>
          </div>
    </>
  )
}

export default page
