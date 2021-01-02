import { fetch } from "./csrf";
import { setListings } from './listings';

const SET_ONE_BOOKING = 'bookings/setOneBooking'
const SET_ALL_BOOKINGS = 'bookings/setBookings';
const CREATE_PENDING_BOOKING = 'bookings/createBooking';
const CONFIRM_BOOKING = 'bookings/confirmBooking';

const setOneBooking = (booking) => {
    return {
        type: SET_ONE_BOOKING,
        payload: booking,
    };
};

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
    };
};

const confirmBooking = (booking) => {
    return {
        type: CONFIRM_BOOKING,
        payload: booking,
    };
};

export const fetchOneBooking = (id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/bookings/${id}`)
        dispatch(
            setOneBooking(response.data)
        );
    };
};

export const fetchAllBookings = () => {
    return async (dispatch) => {
        const response = await fetch('/api/bookings');
        dispatch(setBookings(response.data.bookings));
        dispatch(setListings(response.data.listing));
    };
};

export const fetchCreateBooking = ({ userId, startDay, endDay, status, listingId, duration }) => {
    return async (dispatch) => {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({ userId, startDay, endDay, status, listingId, duration })
        });
        dispatch(createBooking(response.data));
        return response.data;
    };
};

export const fetchConfirmBooking = (id) => {
    return async (dispatch) => {
        console.log("THE THUNKING HAS COMMENCED")
        const response = await fetch(`/api/bookings/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status: "confirmed" }),
        });
        dispatch(confirmBooking(response.data));
        return response.data;
    };
};

const initialState = [];

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ONE_BOOKING:
            newState = action.payload;
            return newState;
        case SET_ALL_BOOKINGS:
            newState = action.payload;
            return newState;
        case CREATE_PENDING_BOOKING:
            newState = action.payload;
            return newState;
        case CONFIRM_BOOKING:
            newState = action.payload;
            return newState;
        default:
            return state;
    };
};

export default bookingReducer;