import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu-container">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
          <li><Link to="/inspire" onClick={closeMenu}>Inspire</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
