import React, { useState } from 'react';
import './recommend.css';
import destination1 from '../../assets/Destination1.png';
import destination2 from '../../assets/Destination2.png';
import destination3 from '../../assets/Destination3.png';
import destination4 from '../../assets/Destination4.png';
import destination5 from '../../assets/Destination5.png';
import destination6 from '../../assets/Destination6.png';
import info1 from '../../assets/info1.png';
import info2 from '../../assets/info2.png';
import info3 from '../../assets/info3.png';

const Recommend = () => {
  const data = [
    {
      image: destination1,
      title: 'Singapore',
      subTitle: 'Singapore, officialy the Republic of Singapore, is a',
      cost: '38,000',
      duration: 'Approx 2 night trip',
    },
    {
      image: destination2,
      title: 'Thailand',
      subTitle: "Thailand is a Southeast Asia country. It's know for",
      cost: '54,200',
      duration: 'Approx 2 night trip',
    },
    {
      image: destination3,
      title: 'Paris',
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: '45,500',
      duration: 'Approx 2 night trip',
    },
    {
      image: destination4,
      title: 'New Zealand',
      subTitle: 'New Zealand is an island country noerwest of',
      cost: '24,100',
      duration: 'Approx 1 night trip',
    },
    {
      image: destination5,
      title: 'Bora Bora',
      subTitle: 'Bora Bora is a small South Pacific island nortwest of',
      cost: '95,400',
      duration: 'Approx 2 night 2 day trip',
    },
    {
      image: destination6,
      title: 'London',
      subTitle: 'London, the capital of England and the United',
      cost: '38,800',
      duration: 'Approx 3 night 2 day trip',
    },
  ];

  const packages = ['the week break', 'the package holiday', 'the group tour', 'long trem slow travel'];

  const [active, setactive] = useState(1);

  return (
    <section id="recommend">
      <div className="title">
        <h2>Recommended Destination</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li className={active === index + 1 ? 'active' : ''} onClick={() => setactive(index + 1)}>
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="destination" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recommend;
