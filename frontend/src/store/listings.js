import { fetch } from "./csrf";

const SET_ALL_LISTINGS = 'listings/setListings';

// Action creator that produces object
const setListings = (listings) => {
    return {
        type: SET_ALL_LISTINGS,
        listings: listings,
    };
};

export const fetchAllListings = () => {
    return async (dispatch) => {
        const response = await fetch('/api/listings');
        dispatch(
            setListings(response.data.listings));

    };
}

const initialState = []

const listingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ALL_LISTINGS: 
            newState = action.listings;
            return newState;
        default: 
            return state;
    }
}

export default listingReducer;