import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img className='img-logo' src='./images/logo.png' />
            </Link>
          </div>         
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/history' className='nav-links' onClick={closeMobileMenu}>
                History
              </Link>
            </li>
            <li>
              <Link to='/design' className='nav-links-mobile' onClick={closeMobileMenu}>
                Create Stamp
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'> Create Stamp</Button>}

          <div className='navbar-account'><i class="fas fa-user-circle"></i></div>  
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;