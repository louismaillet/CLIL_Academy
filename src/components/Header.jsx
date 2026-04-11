import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'active';
    if (path !== '/' && location.pathname.startsWith(path)) return 'active';
    return '';
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" className="logo">ECLA</Link>
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
            <span style={isOpen ? { opacity: 0 } : {}}></span>
            <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
          </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
            <li><Link to="/courses" className={`nav-link ${isActive('/courses')}`}>Courses</Link></li>
            <li><Link to="/course-detail" className={`nav-link ${isActive('/course-detail')}`}>Course Details</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className={`nav-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Header;
