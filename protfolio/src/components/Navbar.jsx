import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import "./Navbar.css";

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getScrollOffset = (width) => {
    if (width < 768) {
      return 50;
    } else if (width >= 768 && width < 992) {
      return 75;
    } else {
      return 100;
    }
  };

  const handleScrollToSection = (sectionId) => {
    const offset = getScrollOffset(window.innerWidth);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      const scrollToPosition = Math.max(0, offsetTop);

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
    setExpanded(false);
  };

  const handleCloseOffcanvas = () => setExpanded(false);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <>
      <Navbar
        className={`app-navbar ${scrolled ? 'scrolled' : ''}`}
        expand="lg"
        sticky="top"
        collapseOnSelect
      >
        <Container className="navbar-container">
          <Navbar.Brand
            className="navbar-brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('home');
            }}
          >
            <span className="brand-text">Gowtham</span>
            <span className="brand-dot">.</span>
          </Navbar.Brand>

          {/* Desktop Menu - Only visible on lg and up */}
          <Nav className="ms-auto nav-links-desktop d-none d-lg-flex">
            {navItems.map(id => (
              <Nav.Link
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(id);
                }}
                className="nav-link-item"
                href={`#${id}`}
              >
                <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                <span className="nav-link-underline"></span>
              </Nav.Link>
            ))}
          </Nav>

          {/* Mobile Menu Button - Only visible below lg */}
          <Button
            variant="outline-light"
            className="mobile-menu-btn d-lg-none"
            onClick={() => setExpanded(true)}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={expanded}
        onHide={handleCloseOffcanvas}
        placement="start"
        responsive="lg"
        className="offcanvas-navbar"
        id="offcanvasNavbar"
      >
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title className="offcanvas-title">
            <span className="brand-text">Gowtham</span>
            <span className="brand-dot">.</span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="offcanvas-body">
          <Nav className="nav-links-mobile flex-column">
            {navItems.map(id => (
              <Nav.Link
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(id);
                }}
                className="nav-link-item"
                href={`#${id}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppNavbar;