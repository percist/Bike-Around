import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import "./Navigation.css"

const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div 
                id="link-profile" 
                onClick={openMenu}
            >
                <i className="fas fa-user"></i>                
            </div>
                {showMenu && (
                    <ul className="profile-dropdown">
                        <li className="profile-dropdown_1">{user.username}</li>
                        <li className="profile-dropdown_2">{user.email}</li>
                        
                        <a 
                            id="link-logout"
                            onClick={logout}
                        >
                            Log Out
                        </a>
                    </ul>
            )}
        </>
    );
};

export default ProfileButton;