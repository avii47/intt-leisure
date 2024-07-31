import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/INTT LEISURE VERTICLE.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Navbar.css';

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation(); // Get the current path
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) { 
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          className={`bg-body-tertiary mb-3 navbar-container ${scrolled ? 'navbar-scrolled' : ''}  ${isMobileView ? 'mobile-view' : ''}`}
        >
          <Container fluid className={`nav-container`}>
            <Navbar.Brand  as={Link} to="/">
              <img className="logo" src={logo} alt="Logo"/>
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
                  <Nav.Link className="nav-item" as={Link} to="/services">SERVICES</Nav.Link>
                  <Nav.Link className="nav-item" as={Link} to="/mindfulness">MINDFULNESS</Nav.Link>
                  <Nav.Link className="nav-item" as={Link} to="/destinations">DESTINATIONS</Nav.Link>
                  <Nav.Link className="nav-item" as={Link} to="/why-choose-us">WHY CHOOSE US</Nav.Link>
                  <Nav.Link className="nav-item" as={Link} to="/contact-us">CONTACT US</Nav.Link>
                </Nav>
                <br />

              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            <Button style={{ marginLeft:'14.375rem' }} variant={scrolled ? "outline-dark" : "outline-light"} className="btn-book" as={Link} to="/bookNow">
                Book Now
            </Button>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar;
