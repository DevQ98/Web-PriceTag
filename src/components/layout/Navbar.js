import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button/Button.js';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/css/Button.css';
import '../../assets/css/Navbar.css'
import { FaRegBell } from "react-icons/fa";
import { connect } from 'react-redux';
import { ChangeStatusNav } from '../../actions/designAction.js'

function NavbarCom(props) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isDesign, setDesign] = useState(props.Info.ChangeStatusNav.Status);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    useEffect(() => {
        setDesign(props.Info.ChangeStatusNav.Status)
    }, [])

    console.log("isDesign", isDesign)
    console.log("props", props)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }

    };

    const design = props.design;
    const showButtonOnDesign = () => {
        console.log(design);
        if (design == "true") {
            console.log("AA")
            setDesign(true);
        }


    }
    useEffect(() => {
        showButton();
        showButtonOnDesign();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar-fluid'>
                <div className='navbar-container'>
                    <div className='navbar__logo '>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <img className='img-logo' src='./images/logo-1.png' />
                        </Link>
                    </div>
                    <div className='navbar__menu '>
                        <NavLink activeClassName='link_active' exact to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                        <NavLink activeClassName='link_active' to='/history' className='nav-links' onClick={closeMobileMenu}>
                            History
                        </NavLink>
                    </div>                  
                    <div className='navbar__user '>
                        <Button onClick={showButtonOnDesign} buttonStyle='btn--primary'> Create Stamp</Button>    
                        <div className='navbar-bell'><FaRegBell /></div>
                        <div className='navbar-account'><i className="fas fa-user-circle"></i></div>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}


const mapStateToProps = state => {
    return {
        Info: state
    }
}
const mapDispatchToProps = dispatch => {
    return {

        ChangeStatusNav: status => {
            dispatch(ChangeStatusNav(status));
        },
    };
};


const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarCom);
export default Navbar;