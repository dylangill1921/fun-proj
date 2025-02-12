// components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
};

return (
    <nav className="navbar">
        <div className="navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
                FORMULA 1
            </Link>

            {/* Hamburger Menu Icon (Mobile) */}
            <div className="menu-icon" onClick={toggleMobileMenu}>
                <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            {/* Navigation Links */}
            <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
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
                    <Link to="/schedule" className="nav-links" onClick={toggleMobileMenu}>
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
                    <Link to="/constructors" className="nav-links" onClick={toggleMobileMenu}>
                    CONSTRUCTORS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-links" onClick={toggleMobileMenu}>
                    LOGIN
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-links" onClick={toggleMobileMenu}>
                    REGISTER
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default NavBar;