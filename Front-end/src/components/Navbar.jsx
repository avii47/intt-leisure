
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
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

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

  const handleMouseEnter1 = () => {
    setDropdownVisible1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownVisible1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

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
      path: "/services/*",
      imageSrc: "https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256690.jpg?t=st=1724313737~exp=1724317337~hmac=08125359353f67e1db79cb7de66cfd3fa746654ed347edb9738e13fdf7eb352d&w=1380",
      altText: "Coparates",
      label: "Coparates"
    },
    {
      path: "/services/*",
      imageSrc: "https://img.freepik.com/free-photo/portrait-person-practicing-yoga-outdoors-nature_23-2151046773.jpg?t=st=1724313825~exp=1724317425~hmac=19a006be2c4244462f988998d7b581d7802158deca5817f95ed844738d38523f&w=1380",
      altText: "Leaders",
      label: "Leaders"
    },
    {
      path: "/services/*",
      imageSrc: "https://img.freepik.com/free-photo/full-shot-woman-doing-yoga_23-2151084040.jpg?t=st=1724313901~exp=1724317501~hmac=bb4e320bb3ea06c2a4f76b9ff321011d18035572e1e398a8394ef5e0d138053e&w=1380",
      altText: "Seekers",
      label: "Seekers"
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

                  <Nav.Link className={`nav-item ${location.pathname === '/mindfulness' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/mindfulness">
                      MINDFULNESS
                  </Nav.Link>

                  <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    <Nav.Link as={Link} to="/services" className={`nav-item ${location.pathname === '/services' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`}>
                      EXPERIENCE
                    </Nav.Link>
                  </div>
                  
                  <Nav.Link className={`nav-item ${location.pathname === '/why-choose-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/why-choose-us">
                      WHY CHOOSE US
                  </Nav.Link>

                  <div onMouseEnter={() => setDropdownVisible2(true)} onMouseLeave={() => setDropdownVisible2(false)}>
                    <Nav.Link as={Link} className={`nav-item ${location.pathname === '/blogs' || location.pathname === '/destinations' || location.pathname === '/events&news' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`}>
                      EXPLORE
                    </Nav.Link>
                  </div>

                  <Nav.Link className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/contact-us">
                      CONTACT US
                  </Nav.Link>
                  
                </Nav>

                {dropdownVisible1 && (
                  <div
                    onMouseEnter={handleMouseEnter1} 
                    onMouseLeave={handleMouseLeave1}  
                  >
                    <CustomDropdown items={ExperienceDropdownItems} scrolled={scrolled} isVisible={dropdownVisible1}/>
                  </div>
                )}

                {dropdownVisible2 && (
                  <div
                    onMouseEnter={handleMouseEnter2}  
                    onMouseLeave={handleMouseLeave2}  
                  >
                    <CustomDropdown items={ exploreDropdownItems} scrolled={scrolled} isVisible={dropdownVisible2}/>
                  </div>
                )}

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
