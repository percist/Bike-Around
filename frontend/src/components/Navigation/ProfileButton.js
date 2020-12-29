import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ProfileUpdateModal from '../ProfileUpdateModal'
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
            <button 
                className="button" 
                onClick={openMenu}
            >
                <i className="fas fa-user"></i>                
            </button>
                {showMenu && (
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <a onClick={logout}>
                            Log Out
                        </a>
                        <a>
                            <ProfileUpdateModal />
                        </a>
                    </ul>
            )}
        </>
    );
};

export default ProfileButton;