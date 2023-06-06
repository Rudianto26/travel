import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import './responsive.css';

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);

  return (
    <section id="navbar">
      <nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travel
          </div>
          <div className="toggle">{navbar ? <VscChromeClose onClick={() => setnavbar(false)} /> : <GiHamburgerMenu onClick={() => setnavbar(true)} />}</div>
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
        </ul>
        <button>Connect</button>
      </nav>
    </section>
  );
};

export default Navbar;
