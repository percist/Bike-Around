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
                <a className="navlink">
                    <NavLink to="/login">Log In</NavLink>                    
                </a>
                <a className="navlink">
                    <NavLink to="/signup">Sign Up</NavLink>
                </a>
            </>
        );
    }

    return (
        <ul className="navbar">
            <li>
                <a className="navlink">
                    <NavLink exact to="/">Home</NavLink>
                </a>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;