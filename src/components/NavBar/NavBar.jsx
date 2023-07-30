import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import logo from "../../asset/logo.png";
import "./NavBar.css"
const NavBar = () => {
    const [nav, setNav] = useState("#navbar");
    const [icon, setIcon] = useState("fas fa-bars");
    const navToggle = () => {
        if (nav === "#navbar") {
          setNav("#navbar active");
        } else setNav("#navbar");
    
        // Icon Toggler
        if (icon === "fas fa-bars") {
          setIcon("fas fa-times");
        } else setIcon("fas fa-bars");
      };
      const [colorChange, setColorchange] = useState(false);
      const changeNavbarColor = () =>{
          if(window.scrollY >= 80){
          setColorchange(true);
          }
          else{
          setColorchange(false);
          }
      };
      window.addEventListener('scroll', changeNavbarColor);
      let pathname = window.location.pathname;
      useEffect(()=> {
        pathname = window.location.pathname;
      },[window.location.pathname]);
  return (
    <>
    <nav  className={colorChange ? 'navChange' : 'nav'} >
        <Link to="/"><img id='logo-image' src={logo} alt='logoimage' /></Link>
        <div>
            <ul id='navbar' className={nav}>
                <li><Link to="/" className='active'>Home</Link></li>
                <li><Link to="/about" className={`${pathname.match('/about')? 'active' : ''}`}>About</Link></li>
               
                <li><Link to="/social-events" className={`${pathname.match('/social-events')? 'active' : ''}`}>Social Events</Link></li>
                <li><Link to="/latest-causes" className={`${pathname.match('/latest-causes')? 'active' : ''}`}>Latest Causes</Link></li>
                <li><Link to="/contact" className={`${pathname.match('/contact')? 'active' : ''}`}>Contact Us</Link></li>
                <li><Link to="/contact" id='donate-btn2'>Donate</Link></li>
                <li><Link to="/contact" id='donate-btn'>Donate</Link></li>
                
            </ul>
        </div>
        <div id='mobile'>
            <i id='bar' onClick={navToggle} className={icon}></i>
    
        </div>

    </nav>
    </>
  )
}

export default NavBar