import { useContext, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as listingActions from '../../store/listings';

const ListingSearchBar = () => {
    const dispatch = useDispatch();

    const currentListings = useSelector(fullReduxState => fullReduxState.listings)

    const searchPrice = (e) => {
        e.preventDefault();
        dispatch(listingActions.searchPrice());
    }

    const searchPrice = (e) => {
        e.preventDefault();
        dispatch(listingActions.searchPrice());
    }

    const searchSize = (e) => {
        e.preventDefault();
        dispatch(listingActions.searchSize());
    }

    const searchType = (e) => {
        e.preventDefault();
        dispatch(listingActions.searchType());
    }

    return (
        <>
            <ListingSearchModal seachParam={listings}/>
        </>
    )
}