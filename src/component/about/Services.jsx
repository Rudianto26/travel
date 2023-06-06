import React from 'react';
import './services.css';
import services1 from '../../assets/service1.png';
import services2 from '../../assets/service2.png';
import services3 from '../../assets/service3.png';
import services4 from '../../assets/service4.png';

const Services = () => {
  const data = [
    {
      icon: services1,
      title: ' get best prices',
      subTitle: 'Pay through our application and save thousand and get amazing rewards.',
    },
    {
      icon: services2,
      title: 'covid safe',
      subTitle: 'We have all the curated hotels that have all the precaution for a covid safe environment',
    },
    {
      icon: services3,
      title: 'flexible payment',
      subTitle: 'Enjoy the flexible payment through our app and get rewards on every payment.',
    },
    {
      icon: services4,
      title: 'fing the best near you',
      subTitle: 'Find teh best hotels and places to visit near youa in a single click.',
    },
  ];
  return (
    <section id="services">
      {data.map((services) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={services.icon} alt="icon" />
            </div>
            <h3>{services.title}</h3>
            <p>{services.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
