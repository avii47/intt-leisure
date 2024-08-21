// src/components/CustomDropdown.js
import React from 'react';
import './CSS/CustomDropdown.css';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function CustomDropdown({ scrolled, items = [] }) {

  return (
    <div className={`custom-dropdown ${scrolled ? 'scrolled' : 'nt-scrolled'}`}>
      <div className="nav-item dropdown-trigger">
        <span className="nav-item-title">EXPLORE</span>
        <div className="dropdownBack" style={{backgroundColor:'yellowgreen'}}>
          <div id="dropdown-content" className="dropdown-content">
            {items.map((item, index) => (
              <div className="dropdown-col" key={index}>
                <Link to={item.path} className="dropdown-item">
                  <img src={item.imageSrc} alt={item.altText} />
                  <p className="font-secondary">{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
