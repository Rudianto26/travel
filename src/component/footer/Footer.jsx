import React from 'react';
import './footer.css';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id="footer">
      <span>Copyright &copy; 2023 Travel. All rights reserved</span>
      <ul className="links">
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
      <ul className="social">
        <li>
          <BsFacebook />
          <BsLinkedin />
          <AiFillInstagram />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
