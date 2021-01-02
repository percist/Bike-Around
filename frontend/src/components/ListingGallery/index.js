import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ListingCard from '../ListingCard';
import { fetchAllListings } from '../../store/listings';
import './ListingGallery.css'

const ListingGallery = () => {
    const dispatch = useDispatch();

    const currentListings = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    // TODO: Implement search functionality by using useState to filter fully returned listings based on dropdowns for bikeType and bikeSize

    useEffect(async () => {
        dispatch(
            fetchAllListings()
        );
    }, []);

    console.log("THIS IS THE CURRENTLISTING:", currentListings)

    return (
        <>
            <hr id="listing-bar" color="#896a67" />
            <div id="listing-header">
                <h3>Bikes to ride near you</h3>
                <hr id="listing-gallery-bar" color="#896a67" />
            </div>
            <div id="listing-gallery">
                {!currentListings && <h3>Loading......</h3>}
                {currentListings && currentListings.map(listing => {
                    return <ListingCard theListing={listing} />;
                })}
            </div>
        </>
    );
}

export default ListingGallery;