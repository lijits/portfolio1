import React from 'react';

const Navbar = ({ bookRef }) => {
  // Page mapping matching the exact array order inside HTMLFlipBook
  const navItems = [
    { label: 'Cover', page: 0 },
    { label: 'About', page: 1 },
    { label: 'Passions', page: 2 },  // Points to HobbiesPage
    { label: 'Skills', page: 3 },    // Points to SkillsPage
    { label: 'Projects', page: 4 },  // Points to ProjectsPage
    { label: 'Education', page: 5 }, // Points to EducationPage
    { label: 'Contact', page: 6 },   // Points to ContactPage
  ];

  const handleNavClick = (pageIndex) => {
    if (bookRef && bookRef.current) {
      bookRef.current.pageFlip().flip(pageIndex);
    }
  };

  return (
    <nav style={styles.navContainer}>
      <div style={styles.navInner}>
        <span style={styles.brand}>LIJI T.S|FULLSTACK DEVELOPER</span>

        <div style={styles.navLinks}>
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.page)}
              style={styles.navBtn}
            >
              {item.label}
            </button>
          ))}
        </div>

        
      </div>
    </nav>
  );
};

const styles = {
  navContainer: {
    position: 'fixed',
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '90%',
    maxWidth: '1050px',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111111',
    border: '1px solid #333333',
    borderRadius: '40px',
    padding: '8px 20px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
  },
  brand: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '1px',
    marginRight: '15px',
  },
  navLinks: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap',
  },
  navBtn: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #333',
    borderRadius: '20px',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    transition: 'all 0.2s ease-in-out',
  },
  hireBtn: {
    backgroundColor: '#FFD700',
    color: '#000000',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '20px',
    padding: '6px 16px',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
};

export default Navbar;