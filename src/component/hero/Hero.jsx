import React from 'react';
import './hero.css';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="background">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel To Explore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum expedita, sunt eveniet nobis accusantium porro molestias vel, laudantium praesentium voluptatum quidem esse et? Vel laborum nisi quia quibusdam sit.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-In</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-Out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
