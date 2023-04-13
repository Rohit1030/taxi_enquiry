import React from 'react'
import { FaTaxi  } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { GiHamburgerMenu} from "react-icons/gi"
import 'antd/dist/reset.css';
import './Navbar.css'
import { Drawer } from 'antd';
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Drawer title="" placement="right" onClose={onClose} open={open}>
        <ul className="menu-links">
        <li className="menu-link">
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='menu-nav-link'>
                        About Us
                    </Link>
                  </li>
                  <li className="menu-link">
                    <Link
                      activeClass="active"
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='menu-nav-link'>
                        Our Services
                    </Link>
                  </li>
                  <li className="menu-link">
                    <Link 
                      activeClass="active"
                      to="why-choose-us"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='menu-nav-link'>
                        Why Choose Us
                      </Link >
                  </li>
          <li className="menu-link"><a href="#" className='menu-nav-link'>Contact Us</a></li>
        </ul>
      </Drawer>
    <div className='navbar'>
        <div className="nav-content common-width">
          <GiHamburgerMenu id='menu-icon' onClick={showDrawer} />
          <div className="nav-logo-name">
              <FaTaxi id='taxi-logo' />
              <span id='quick' className='name'>Quick</span>
              <span id='taxi' className='name'>Taxi</span>
          </div>
          <div className="nav-links">
              <ul className="links">
                  <li className="link">
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='nav-link'>
                        About Us
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      activeClass="active"
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='nav-link'>
                        Our Services
                    </Link>
                  </li>
                  <li className="link">
                    <Link 
                      activeClass="active"
                      to="why-choose-us"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      className='nav-link'>
                        Why Choose Us
                      </Link >
                  </li>
                  <li className="link"><a href="#" className='nav-link'>Contact Us</a></li>
              </ul>
          </div>
          <button className="nav-book-btn">
              <div className='btn-section-one'>
                <IoIosCall id='call-logo' />
                +91 6543217809
              </div>
              <div><strong>Click to book</strong></div>
          </button>
        </div>
    </div>
    </>
  )
}

export default Navbar
