import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../SignupFormModal/Signup.css'

const ProfileUpdateForm = () => {

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword === confirmNewPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUp({ 
                firstName,
                lastName,
                address1,
                address2,
                city,
                state,
                zip,
                phoneNumber,
                newPassword
            }))
                .catch((res) => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Passwords must match.']);
    };

    return (
        <div id="edit-profile">
            <div id="edit-profile_1">
            </div>
            <div id="edit-profile_2">
                <form
                    className="form"
                    id="edit-profile-form"
                    onSubmit={handleSubmit}
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <label>
                        First Name
                        <input
                            className="input"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            className="input"
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Street Address
                        <input
                            className="input"
                            type="text"
                            id="address1"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Street Address 2
                        <input
                            className="input"
                            type="text"
                            id="address2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        City
                        <input
                            className="input"
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        State
                        <select
                            className="select"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        >
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </label>
                    <label>
                        Zip code
                        <input
                            className="input"
                            type="text"
                            id="zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            className="input"
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Set a New Password
                        <input
                            className="input"
                            type="password"
                            value={newPassword}
                            id="newPassword"
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input
                            className="input"
                            type="password"
                            value={confirmNewPassword}
                            id="confirm-new-password"
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
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

export default ProfileUpdateForm;