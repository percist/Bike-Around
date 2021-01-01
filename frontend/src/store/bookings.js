import { fetch } from "./csrf";
import { setListings } from './listings';

const SET_ALL_BOOKINGS = 'bookings/setBookings';
const CREATE_PENDING_BOOKING = 'bookings/createBooking';

const setBookings = (bookings) => {
    return {
        type: SET_ALL_BOOKINGS,
        payload: bookings,
    };
};

const createBooking = (booking) => {
    return {
        type: CREATE_PENDING_BOOKING,
        payload: booking,
    }
}

export const fetchAllBookings = () => {
    return async (dispatch) => {
        const response = await fetch('/api/bookings');
        dispatch(setBookings(response.data.bookings));
        dispatch(setListings(response.data.listing));
    }
};

export const fetchCreateBooking = ({ userId, startDay, endDay, status, listingId, duration }) => {
    return async (dispatch) => {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({ userId, startDay, endDay, status, listingId, duration })
        })
        dispatch(createBooking(response.data))
    }
}

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ALL_BOOKINGS:
            newState = action.payload;
            return newState;
        case CREATE_PENDING_BOOKING:
            console.log(action.payload)
            newState = action.payload
            return newState;
        default:
            return state;
    };
};

export default bookingReducer;