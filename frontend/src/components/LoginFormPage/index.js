import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import './LoginForm.css';


const onSubmit = () => {

}

const LoginForm = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }

    return (
        <div id="login">
            <div id="login-form_1">
            </div>
            <div id="login-form_2">
                <form 
                    className="form"
                    id="login-form"
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        Username or Email
                        <input 
                            className="input"
                            type="text" 
                            id="credential" 
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
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
                    <button 
                        className="button"
                        id="button-login"
                        type="submit">Log In</button>
                </form>
            </div>
            <div id="login-form_1">
            </div>
        </div>
    )
}

export default LoginForm;