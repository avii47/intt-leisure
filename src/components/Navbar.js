import React from 'react';

const Navbar = () => {
  return (
    <div className='d-flex top-bar fixed-top'>
        <div className='col-3'>
            <a className="nav-link active" href="#Hero-section">
                <img className="logo" src="https://pbs.twimg.com/profile_images/1584892301175840769/fSw966m1_400x400.jpg" alt="" />
            </a>
        </div>
        <div className='col-6'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#Hero-section">Page 01</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Page 02</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#mindfulness-section">Page 03</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#mindfulness-tourism-section">Page 04</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#mindfulness-power-section">Page 05</a>
                </li>
            </ul>
        </div>
        <div className='col-3'>
            <button type="button" className="btn btn-outline-dark btn-book">Book Now</button>
        </div>
    </div>
  );
};

export default Navbar;