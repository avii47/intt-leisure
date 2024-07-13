import React, { useEffect, useState } from 'react';
import logo from '../assets/images/INTT LEISURE VERTICLE.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Navbar.css';

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) { // Change the navbar background as soon as the user starts scrolling
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          className={`bg-body-tertiary mb-3 navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}
        >
          <Container fluid className="nav-container">
            <Navbar.Brand href="#Hero-section">
              <img className="logo" src={logo} alt="Logo" style={{ height: '30px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="navbar-offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3>INTT Leisure</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3 nav-item-container font-secondary">
                  <Nav.Link className="nav-item" href="#Hero-section">PAGE 01</Nav.Link>
                  <Nav.Link className="nav-item" href="#discover-section">PAGE 02</Nav.Link>
                  <Nav.Link className="nav-item" href="#mindfulness-tourism-section">PAGE 03</Nav.Link>
                  <Nav.Link className="nav-item" href="#about-section">PAGE 04</Nav.Link>
                  <Nav.Link className="nav-item" href="#service-section">PAGE 05</Nav.Link>
                </Nav>
                <br />
                <Button variant={scrolled ? "outline-dark" : "outline-light"} className="btn-book">
                  Book Now
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar;
