import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import '../../assets/css/Button.css';
import '../../assets/css/Navbar.css'


function NavbarCom(props) {

    return (
        <>
            <nav className='navbar-fluid'>
                <div className='navbar-container'>
                    <div className='navbar__left navbar__left--separate '>
                        <Link to='/' className='navbar__left' >
                            <img className='navbar__left-logo' src='./images/logo-1.png' />
                        </Link>
                    </div>
                    <div className='navbar__center  '>
                        <NavLink activeClassName='navbar__center-link--active   ' className='navbar__center-link '  exact to='/'  >
                            Home
                        </NavLink>
                        <NavLink activeClassName='navbar__center-link--active' className='navbar__center-link' to='/history'  >
                            History
                        </NavLink>

                       
                    </div>                  
                    <div className='navbar__right '>
                        <div className='navbar__right-create'>
                            <Link to='design' ><button  className=' navbar__right-btn btn' > Create Stamp </button></Link>
                        </div>
                        
                        <div className='navbar__right-account'>
                            <FaRegBell />
                           <IoPersonCircleOutline/>
                        </div> 
                    </div>
                    
                </div>
            </nav>
        </>
    );
}
export default NavbarCom;