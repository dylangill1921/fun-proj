// components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background colour to appear
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`formula1-header ${headerVisible ? '' : 'hidden'} ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          FORMULA 1
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/latest" className="nav-links" onClick={toggleMobileMenu}>
              LATEST
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/video" className="nav-links" onClick={toggleMobileMenu}>
              VIDEO
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/schedule"
              className="nav-links"
              onClick={toggleMobileMenu}
            >
              SCHEDULE
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/results" className="nav-links" onClick={toggleMobileMenu}>
              RESULTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/drivers" className="nav-links" onClick={toggleMobileMenu}>
              DRIVERS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/constructors"
              className="nav-links"
              onClick={toggleMobileMenu}
            >
              CONSTRUCTORS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={toggleMobileMenu}>
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-links"
              onClick={toggleMobileMenu}
            >
              REGISTER
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
