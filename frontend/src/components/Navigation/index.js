import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
                    {/* <NavLink 
                        to="/login"
                        className="navlink"
                        >Log In
                    </NavLink>                    
                    <NavLink 
                        to="/signup"
                        className="navlink"
                        >Sign Up
                    </NavLink>                     */}
            </>
        );
    }

    return (
        <ul className='navbar'>
            <li>
                <h2>
                    Bike Around
                </h2>
            </li>
            <li className="navbar-link">
                
                <NavLink 
                    to="/" exact
                    className="navbar-link_1"
                    >Home
                </NavLink> 
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;