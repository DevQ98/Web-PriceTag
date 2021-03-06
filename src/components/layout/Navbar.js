import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FaRegBell } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setCurrentStamp } from '../../app/stampSlice';
import '../../assets/css/Button.css';
import '../../assets/css/Navbar.css';

export default function NavbarCom() {
  const dispatch = useDispatch();

  const handleCreateStampClick = () => {
    localStorage.removeItem('Price');
    const stamp = {
      frame: { width: 100, height: 100 },
      elementList: [],
      name: ' chua set name',
      link: ' chua set link',
    };
    const action = setCurrentStamp(stamp);
    dispatch(action);
  };

  return (
    <>
      <nav className="navbar-fluid">
        <div className="navbar-container">
          <div className="navbar__left  ">
            <Link to="/" className="navbar__left">
              <img className="navbar__left-logo" alt="" src="./images/logo-1.png" />
            </Link>
          </div>
          <div className="navbar__center  ">
            <NavLink
              activeClassName="navbar__center-link--active   "
              className="navbar__center-link "
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navbar__center-link--active"
              className="navbar__center-link"
              to="/history"
            >
              History
            </NavLink>
          </div>
          <div className="navbar__right ">
            <div className="navbar__right-create">
              <Link to="design">
                {' '}
                <button className=" navbar__right-btn btn" onClick={handleCreateStampClick}>
                  {' '}
                  Create Stamp{' '}
                </button>
              </Link>
            </div>

            <div className="navbar__right-account">
              <FaRegBell />
              <IoPersonCircleOutline />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
