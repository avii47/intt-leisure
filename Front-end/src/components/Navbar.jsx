
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo_color from '../assets/images/INTT LEISURE VERTICLE.png';
import logo_dark from '../assets/icons/INTT Leisure Logo-01.png';
import logo_light from '../assets/icons/INTT Leisure Logo-02.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMobileView } from '../contexts/MobileViewContext';
import './CSS/Navbar.css';
import CustomDropdown from './CustomDropdown';

import img1 from '../assets/images/stock-photo-old-man-with-gray-hair-reading-a-book-sited-on-an-bench-2292379427 (1).jpg'
import img2 from '../assets/images/stock-photo-group-of-diverse-young-people-practicing-yoga-doing-easy-seat-exercise-sukhasana-pose-working-1227103207.jpg'
import img3 from '../assets/images/full-shot-man-working-outdoors.jpg'
import img4 from '../assets/images/WhatsApp Image 2024-08-23 at 3.43.43 PM.jpeg'
import img5 from '../assets/images/beautiful-woman-meditating-nature.jpg'

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

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

  const handleLinkClick = () => {
    setShowOffcanvas(false); // Close the offcanvas menu
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
      imageSrc: "https://img.freepik.com/free-photo/stacked-zen-stones-sand-background-art-balance-concept_53876-110628.jpg?t=st=1724409939~exp=1724413539~hmac=d7e1b03fd96d2b66fac682d1dd5bb0b68e2cc9edd8375ee21304efce640df291&w=1380",
      altText: "Events & News",
      label: "Events & News"
    },
  ];

  const ExperienceDropdownItems = [
    {
      path: "/services/*",
      imageSrc: img1,
      altText: "Leaders",
      label: "Leaders"
    },
    {
      path: "/services/*",
      imageSrc: img2,
      altText: "Educators",
      label: "Educators"
    },
    {
      path: "/services/*",
      imageSrc: img3,
      altText: "Coparates",
      label: "Coparates"
    },
    {
      path: "/services/*",
      imageSrc: img4,
      altText: "Students",
      label: "Students"
    },
    {
      path: "/services/*",
      imageSrc: img5,
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
          <Container fluid className={`nav-container`} >
            <Navbar.Brand id="callOne"  as={Link} to="/" >
              <img loading="lazy" className="logo" src={scrolled ? logo_dark : logo_light} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler" onClick={() => setShowOffcanvas(!showOffcanvas)} />
            <Navbar.Offcanvas
              className="navbar-offcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3 style={{margin:'10px'}}>INTT Leisure</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`flex-grow-1 pe-3 nav-item-container font-secondary ${isMobileView ? 'mobile-view' : ''}`}>

                {!isMobileView ? (
                  <>
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
                  </>
                ) : (
                  <>
                      <Nav.Link className={`nav-item ${location.pathname === '/mindfulness' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/mindfulness"  onClick={handleLinkClick}>
                          MINDFULNESS
                      </Nav.Link>

                      <Nav.Link className={`nav-item ${location.pathname === '/services' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/services" onClick={handleLinkClick}>
                        EXPERIENCE
                      </Nav.Link>
                      
                      <Nav.Link className={`nav-item ${location.pathname === '/why-choose-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/why-choose-us" onClick={handleLinkClick}>
                          WHY CHOOSE US
                      </Nav.Link>

                      <Nav.Link className={`nav-item ${location.pathname === '/blogs' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/blogs" onClick={handleLinkClick}>
                          BLOGS
                      </Nav.Link>

                      <Nav.Link className={`nav-item ${location.pathname === '/destinations' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/destinations" onClick={handleLinkClick}>
                          DESTINATIONS
                      </Nav.Link>

                      <Nav.Link className={`nav-item ${location.pathname === '/events&news' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/events&news" onClick={handleLinkClick}>
                          EVENTS & NEWS
                      </Nav.Link>

                      <Nav.Link className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''} ${scrolled ? 'scrolled' : 'nt-scrolled'}`} as={Link} to="/contact-us" onClick={handleLinkClick}>
                          CONTACT US
                      </Nav.Link>
                  </>
                )}
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
