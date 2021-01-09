import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { confirmAlert } from 'react-confirm-alert';
import { clearElement } from  '../../actions/designAction'
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../assets/css/Button.css';
import '../../assets/css/Navbar.css'

class NavbarCom extends Component {

        constructor(props) {
            super(props)
            this.state = {
                fontSize: 24
            }
    
        } 

    submit = () => {
        this.props.clearElement();
        // confirmAlert({
        //   title: 'Confirm ',
        //   message: 'Ban co muon tao moi ',
        //   buttons: [
        //     {
        //       label: 'Yes',
        //       to :'design'
        //     },
        //     {
        //       label: 'No',
        //       onClick: () => alert('Click No')
        //     }
        //   ]
        // });
      };
      
    render() {
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
                            <Link to='design'> <button  className=' navbar__right-btn btn' onClick={this.submit} > Create Stamp </button></Link>
                        </div>
                        
                        <div className='navbar__right-account'>
                            <FaRegBell />
                           <IoPersonCircleOutline/>
                        </div> 
                    </div>
                    
                </div>
            </nav>
        </>
    );}
}
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {

        clearElement : () =>{
            dispatch(clearElement())
        },
    };
};

export default NavbarCom = connect(mapStateToProps, mapDispatchToProps)(NavbarCom);