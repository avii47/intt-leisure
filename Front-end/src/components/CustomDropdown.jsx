import React from 'react';
import { Link } from 'react-router-dom';

function CustomDropdown({ scrolled, isVisible, items = [] }) {

  return (
    <div className={`custom-dropdown ${scrolled ? 'scrolled' : 'nt-scrolled'} ${isVisible ? 'visible' : ''}`}>
      <div id="dropdown-content" className={`dropdown-content ${scrolled ? 'scrolled' : 'nt-scrolled'}`}>
        {items.map((item, index) => (
          <div className="dropdown-col" key={index}>
            <Link to={item.path} className="dropdown-item">
              <div>
                <img src={item.imageSrc} alt={item.altText} className="dropdown-image" />
                <p className="font-secondary">{item.label}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomDropdown;
