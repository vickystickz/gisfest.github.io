import React, {useState} from 'react';
import '../styles/Header.css';
import { MenuItems } from '../utils/data';
import logo_Black from '../media/icons/Logo_Black.svg';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [click, setClick] = useState(false);
    const [fixHeader, setFixHeader] = useState(false);

    const fixHeaderOnScroll = () => {
      if(window.scrollY >= 5) {
        setFixHeader(true)
      }else{
        setFixHeader(false)
      }
    }

    window.addEventListener("scroll", fixHeaderOnScroll);

    const handleClick = () =>setClick(!click);

  return (
    <div className={fixHeader ? 'navbar-container sticky': "navbar-container"}> 
        <NavLink exact to="/" className='Nav_logo'>
            <img src={logo_Black} alt='gisfest_logo_white'/>
        </NavLink>
            <ul className={click ? "navbar-links active-nav-menu" : "navbar-links"}>
            {MenuItems.map((item,index) => {
                return (
                    <li key={index}>
                        <NavLink exact to={item.url} onClick={handleClick} className={({ isActive }) => isActive ? "nav-link-active" : `${item.cName}`}>
                        {item.title}
                        </NavLink>  
                    </li>
                )
            })}
            <div className='btn'>
            <button onClick={handleClick} className='nav-btn'>Subscribe</button>
            </div>
            </ul>
        <div className='nav-menu-mobile' onClick={handleClick} >
                 {click ? <FaTimes className='Icon' /> : <FaBars className="Icon" />     } 
        </div>
    </div>
  )
}

export default Header
