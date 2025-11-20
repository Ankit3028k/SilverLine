import React from 'react';
import Logo from '../elements/Logo';



const navItem = {
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#e9ecef'
  }
};

function NavbarLayout() {
  return (
    <nav className='nav header'>
      <div>
        <Logo />
      </div>
      <div>
        <ul className='nav-menu'>
          <a className='nav-link' href="#"><li style={navItem}>Home</li></a>
         <a className='nav-link' href="#"> <li style={navItem}>Catalogue</li></a>
          <a className='nav-link' href="#"><li style={navItem}>Patient</li></a>
          <a className='nav-link' href="#"><li style={navItem}>Company Profile</li></a>
          <a className='nav-link' href="#"><li style={navItem}>Contacts</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarLayout;
