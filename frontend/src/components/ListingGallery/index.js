import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetch } from '../../store/csrf';
import {useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import ListingCard from '../ListingCard';
import {fetchAllListings} from '../../store/listings';

const ListingGallery = () => {
    const dispatch = useDispatch();

    const currentListings = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    useEffect(async () => {
        dispatch(
            fetchAllListings()
        );
    }, []);

    return (
        <div id="listings-page">
            <h3>Nearby bikes you could ride today</h3>
            <hr />
            {!currentListings && <h3>Loading......</h3>}
            {currentListings && currentListings.map(listing => {
                return <ListingCard theListing={listing} />;
            })}
        </div>
    );
}

export default ListingGallery;