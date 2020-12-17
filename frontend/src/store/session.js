import thunk from "redux-thunk";
import {fetch} from "./csrf"

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = () => {
    return{
        type: 'REMOVE_USER'
    }
}

export const login = (user) => async (dispatch) => {
    const res = await fetch('/api/session', {
        method: "POST",
        body: JSON.stringify({
            credential: user.credential,
            password: user.password
        })
    });
    dispatch(setUser(res.data.user));
    return res;
};

export const signUp = (user) => async (dispatch) => {
    const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password
        })
    });
    dispatch(setUser(res.data.user))
    return res;
};

export const restoreUser = () => async dispatch => {
    const res = await fetch('/api/session');
    dispatch(setUser(res.data.user));
    return res;
}

// const user= {
//         id,
//         email,
//         username,
//         cretedAt,
//         updatedAt
//     }

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case "SET_USER":
            return{...state,
                user: action.payload
            }
        case "REMOVE_USER":
            return {user: null}
        default:
            return state;
    }
}

export default sessionReducer;