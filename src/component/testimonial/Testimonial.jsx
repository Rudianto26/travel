import React from 'react';
import './testimonial.css';
import avatarimage from '../../assets/avatarImage.jpeg';

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur corrupti omnis id enim et obcaecati odit, velit libero iure blanditiis iusto, officia eligendi doloribus hic earum ab deleniti sapiente.</p>
          <div className="info">
            <img src={avatarimage} alt="" />
            <div className="detail">
              <h4>Kamal</h4>
              <span>Visitor</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur corrupti omnis id enim et obcaecati odit, velit libero iure blanditiis iusto, officia eligendi doloribus hic earum ab deleniti sapiente.</p>
          <div className="info">
            <img src={avatarimage} alt="" />
            <div className="detail">
              <h4>Kamal</h4>
              <span>Visitor</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur corrupti omnis id enim et obcaecati odit, velit libero iure blanditiis iusto, officia eligendi doloribus hic earum ab deleniti sapiente.</p>
          <div className="info">
            <img src={avatarimage} alt="" />
            <div className="detail">
              <h4>Kamal</h4>
              <span>Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
