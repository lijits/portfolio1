import React, { useState } from 'react';

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-dark text-white p-3 border-bottom border-secondary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand Name / Title */}
        <h5 className="m-0 fw-bold">CONNECT</h5>

        {/* Hamburger Toggle Button (Visible on Mobile) */}
        <button
          className="btn btn-outline-light d-md-none"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {/* Hamburger Icon (3 horizontal bars) */}
          <span className="fs-4">&#9776;</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="d-none d-md-flex gap-2">
          <a href="#cover" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Cover</a>
          <a href="#about" className="btn btn-sm btn-outline-secondary text-white rounded-pill">About</a>
          <a href="#passions" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Passions</a>
          <a href="#skills" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Skills</a>
          <a href="#projects" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Projects</a>
          <a href="#education" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Education</a>
          <a href="#contact" className="btn btn-sm btn-outline-secondary text-white rounded-pill">Contact</a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu (Renders when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="d-md-none mt-3 border-top border-secondary pt-3">
          <nav className="d-flex flex-column gap-2">
            <a href="#cover" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Cover</a>
            <a href="#about" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>About</a>
            <a href="#passions" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Passions</a>
            <a href="#skills" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Projects</a>
            <a href="#education" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Education</a>
            <a href="#contact" className="btn btn-sm btn-outline-secondary text-white text-start" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}