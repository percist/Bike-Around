import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import DemoSignupFormModal from '../DemoUserModal';

const Navigation = ({ isLoaded }) =>{
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink 
                    id="link-bookings"  
                    to="/bookings"
                >
                    My Bookings
                </NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    }else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                <DemoSignupFormModal />
            </>
        );
    }

    return (
        <ul className='navbar'>
            <li>
                <h2 id="navbar-link-home">
                    <Link to="/listings">
                        bike around
                    </Link>
                </h2>
            </li>
            <li className="navbar-link">
                <NavLink 
                    to="/" exact
                    id="link-home"
                    >Home
                </NavLink> 
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;