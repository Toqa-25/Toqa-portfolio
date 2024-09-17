import React from 'react';
import './../Main.css';
import './Services.css';
import { Link} from 'react-router-dom';

const Services = () => {
  return (
    <div className="container">
      <h4 className="page-header" > Services</h4>
      <div className="services-content">
        <h3 className="services-header"> what can i do ? </h3>
        <ul className="services-items">
          <li className="service-item">
            <div className="service-icon"></div>
            <div className="service-desc">
              <Link className="service"></Link>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
