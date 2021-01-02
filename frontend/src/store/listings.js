import { fetch } from "./csrf";

const SET_ALL_LISTINGS = 'listings/setListings';
const SET_ONE_LISTING = 'oneListing/setOneListing';

export const setListings = (listings) => {
    return {
        type: SET_ALL_LISTINGS,
        payload: listings,
    };
};

const setOneListing = (listing) => {
    return {
        type: SET_ONE_LISTING,
        payload: listing,
    };
};

export const fetchAllListings = () => {
    return async (dispatch) => {
        const response = await fetch('/api/listings');
        dispatch(
            setListings(response.data.listings)
        );
    };
};

export const fetchOneListing = (id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/listings/${id}`);
        dispatch(
            setOneListing(response.data.listing)
        );
    };
};

const initialState = [];

const listingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ALL_LISTINGS: 
            newState = action.payload;
            return newState;
        case SET_ONE_LISTING:
            newState = action.payload;
            return newState;
        default: 
            return state;
    };
};

export default listingReducer;