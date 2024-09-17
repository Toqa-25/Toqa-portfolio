import React from 'react';
import './../Main/Main.css';
import './Services.css';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wordpressIcon from './../../images/icons/wordpress.svg';

const Services = () => {
  return (
    <div className="container services flex-column">
      <h2 className="page-header" > Services </h2>
      <div className="services-content flex-column">
        <h1 className="services-header special-color"> what can i do ? </h1>
        <ul className="services-items flex-column">
          <li className="service-item">
            <div className="service-icon">
              <img src={wordpressIcon} alt="" className="icon-img" />
            </div>
            <div className="service-info">
              <p className="desc">convert wordpress websites into HTML, CSS, and JS responsive designs</p>
                <Link className="service-link" to="https://toqa-25.github.io/Dr.Dan/">
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>  
                </Link>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Services
