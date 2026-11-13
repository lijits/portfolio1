import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ bookRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (pageIndex) => {
    setIsOpen(false);

    if (bookRef && bookRef.current) {
      bookRef.current.pageFlip().flip(pageIndex);
    }
  };

  return (
    <nav className="portfolio-navbar">
      <div className="nav-brand">
        <h2>Liji T.S.</h2>
        <span className="nav-subtitle">Web Developer</span>
      </div>

      {/* Hamburger Toggle Button */}
      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <button onClick={() => handleNavClick(0)}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick(1)}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavClick(3)}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleNavClick(4)}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleNavClick(6)}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}