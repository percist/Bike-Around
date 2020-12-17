import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Signup.css';

const SignupForm = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUp({ username, email, password}))
                .catch((res) => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Passwords must match.']);
    };

    return (
        <div id="signup">
            <div id="signup-form_1">
            </div>
            <div id="signup-form_2">
                <form
                    className="form"
                    id="signup-form"
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        Username
                        <input
                            classname="input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input
                            classname="input"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            className="input"
                            type="password"
                            value={password}
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input
                            className="input"
                            type="password"
                            value={confirmPassword}
                            id="confirm-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        className="button"
                        id="button-signup"
                        type="submit"
                        >Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;