
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo_color from '../assets/images/INTT LEISURE VERTICLE.png';
import logo_dark from '../assets/icons/INTT Leisure Logo-01.png';
import logo_light from '../assets/icons/INTT Leisure Logo-02.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMobileView } from '../contexts/MobileViewContext';
import './CSS/Navbar.css';
import CustomDropdown from './CustomDropdown';

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const isMobileView = useMobileView();

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

  const exploreDropdownItems = [
    {
      path: "/blogs",
      imageSrc: "https://img.freepik.com/free-photo/notepad-laptop-concept_23-2147982614.jpg",
      altText: "Blogs",
      label: "Blogs"
    },
    {
      path: "/destinations",
      imageSrc: "https://img.freepik.com/free-photo/woman-stretching-relaxing-nature_23-2147658214.jpg",
      altText: "Destinations",
      label: "Destinations"
    },
    {
      path: "/events&news",
      imageSrc: "https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032383.jpg",
      altText: "Events & News",
      label: "Events & News"
    },
  ];

  const ExperienceDropdownItems = [
    {
      path: "/blogs",
      imageSrc: "https://img.freepik.com/free-photo/notepad-laptop-concept_23-2147982614.jpg",
      altText: "Blogs",
      label: "Blogs"
    },
    {
      path: "/destinations",
      imageSrc: "https://img.freepik.com/free-photo/woman-stretching-relaxing-nature_23-2147658214.jpg",
      altText: "Destinations",
      label: "Destinations"
    },
    {
      path: "/events&news",
      imageSrc: "https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032383.jpg",
      altText: "Events & News",
      label: "Events & News"
    },
  ];
  

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
            <Navbar.Brand id="callOne"  as={Link} to="/" >
              <img loading="lazy" className="logo" src={scrolled ? logo_dark : logo_light} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler" />
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
                <Nav className={`flex-grow-1 pe-3 nav-item-container font-secondary ${isMobileView ? 'mobile-view' : ''}`}>
                  <Nav.Link className={`nav-item ${location.pathname === '/mindfulness' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/mindfulness" style={{  }}>MINDFULNESS</Nav.Link>

                  
                  <Nav.Link className={`nav-item ${location.pathname === '/services' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/services">EXPERIENCE</Nav.Link>
                  <Nav.Link className={`nav-item ${location.pathname === '/why-choose-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/why-choose-us">WHY CHOOSE US</Nav.Link>

                  {/* Custom Dropdown */}
                  <CustomDropdown scrolled={scrolled} items={exploreDropdownItems} className={`nav-item ${location.pathname === '/services' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/services"/>

                  <Nav.Link className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/contact-us">CONTACT US</Nav.Link>
                </Nav>
                <br />
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            <Button variant={scrolled ? "outline-dark" : "outline-light"} className="btn-book" as={Link} to="/bookNow">
                Book Now
            </Button>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar;
