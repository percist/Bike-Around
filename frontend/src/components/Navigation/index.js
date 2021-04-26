import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginForm';
import './Navigation.css';
import SignupForm from '../SignupForm';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const [form, setForm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loginButton = (e) => {
    e.preventDefault();
    setForm("login");
    setShowModal("true");
  }

  const signupButton = (e) => {
    e.preventDefault();
    setForm("signup");
    setShowModal("true");
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink
          class="link"
          id="link-bookings"
          to="/bookings"
        >
          My Bookings
                </NavLink>
        <NavLink
          class="link-icon link"
          id="link-icon-bookings"
          to="/bookings"
        >
        <i className="fas fa-calendar-alt"></i>
                </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <a
          href="/login"
          class="link"
          id="link-login"
          onClick={loginButton}>
          Login
                </a>
        <a
          href="/signup"
          class="link"
          id="link-signup"
          onClick={signupButton}>
          Sign Up
                </a>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            { form === "login" && (
              <LoginForm />
            )}
            { form === "signup" && (
              <SignupForm />
            )}
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <ul className='navbar'>
        <li>
          <h2 id="navbar-link-home">
            <Link 
              to="/listings"
              id="link-logo">
              bike around
                        </Link>
          </h2>
        </li>
        <li className="navbar-link">
          <NavLink
            to="/" exact
            class="link" 
            id="link-home"
          >Home
                    </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      <hr id="listing-bar" color="#896a67" />
    </>
  );
}

export default Navigation;