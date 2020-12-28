import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) =>{
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    }else {
        sessionLinks = (
            <>
                <NavLink 
                    to="/login"
                    className="navlink"
                    >Log In
                </NavLink>                    
                <NavLink 
                    to="/signup"
                    className="navlink"
                    >Sign Up
                </NavLink>                    
            </>
        );
    }

    return (
        <ul className='navbar'>
            <li className="navbar-link">
                <NavLink 
                    to="/"
                    className="navbar-link_1"
                    >Home
                </NavLink> 
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;