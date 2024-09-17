import React from 'react';
import './../Main/Main.css';
import './Services.css';
import { Link} from 'react-router-dom';
import wordpressIcon from './../../images/icons/wordpress.svg'

const Services = () => {
  return (
    <div className="container">
      <h4 className="page-header" > Services</h4>
      <div className="services-content">
        <h3 className="services-header special-color"> what can i do ? </h3>
        <ul className="services-items">
          <li className="service-item">
            <div className="service-icon">
              <img src={wordpressIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc">convert </p>
              <Link className="service-link" to=""></Link>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
