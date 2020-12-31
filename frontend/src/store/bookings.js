import { fetch } from "./csrf";

const SET_ALL_BOOKINGS = 'bookings/setBookings';

const setBookings = (bookings) => {
    return {
        type: SET_ALL_BOOKINGS,
        payload: bookings,
    };
};

export const fetchAllBookings = () => {
    return async (dispatch) => {
        const response = await fetch('/api/bookings');
        console.log(response)
        dispatch(setBookings(response.data.bookings));
    }
};

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ALL_BOOKINGS:
            newState = action.payload;
            return newState;
        default:
            return state;
    };
};

export default bookingReducer;