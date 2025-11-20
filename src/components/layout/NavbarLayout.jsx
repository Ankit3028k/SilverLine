import React, { useState } from 'react';
import Logo from '../elements/Logo';
import './NavbarLayout.css';

function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Information for Patients', path: '/information' },
    { name: 'Lens Categories', path: '/lens-categories' },
    { name: 'Lens Care Solutions', path: '/lens-care' },
    { name: 'Browse Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Style Guide', path: '/style-guide' }
  ];

  return (
    <nav className='nav header'>
      <div className='nav-brand'>
        <Logo />
      </div>
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className='nav-list'>
          {navItems.map((item, index) => (
            <li key={index} className='nav-item'>
              <a className='nav-link' href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className='nav-actions'>
        <div className='mobile-menu-icon' onClick={toggleMenu}>
          <span>{isMenuOpen ? '✕' : '☰'}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLayout;