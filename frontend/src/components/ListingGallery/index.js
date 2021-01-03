import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ListingCard from '../ListingCard';
import SearchBar from '../SearchBar';
import { fetchAllListings } from '../../store/listings';
import './ListingGallery.css'

const ListingGallery = () => {
    const dispatch = useDispatch();
    
    const currentListings = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    const [activePage, setActivePage] = useState("listings");
    const [listingsShown, setListingsShown] = useState([...currentListings])
    const [query, setQuery] = useState('');

    const listingsRegex = new RegExp(query, "i")
    
    useEffect(async () => {
        await dispatch(
            fetchAllListings()
            );
        }, []);
        
    useEffect(async() => {
        filterListings()
    }, [query]);
        
    // loosely based on Tyler Funk's Medium article "Build a Custom React Search Bar Component Using a Dyanmic Regex" Oct 31, 2020
    // https://medium.com/dev-genius/build-a-custom-react-search-bar-component-using-a-dynamic-regex-cd89fdd496f5 accessed Jan 2, 2021
    function filterListings () {
        if(query.length > 0) {
            const titleListings = [...currentListings].filter(listing => listingsRegex.test(listing.title))
            const descriptionListings = [...currentListings].filter(listing => listingsRegex.test(listing.description))
            const sizeListings = [...currentListings].filter(listing => listingsRegex.test(listing.BikeSize.name))
            const typeListings = [...currentListings].filter(listing => listingsRegex.test(listing.BikeType.type))
            const cityListings = [...currentListings].filter(listing => listingsRegex.test(listing.nearestCity))
            const allListings = [...titleListings, ...descriptionListings, ...sizeListings, ...typeListings, ...cityListings]
            const uniqueListings = [...new Set(allListings)]
            setListingsShown(uniqueListings)
        } else if (query.length === 0) {
            setListingsShown([...currentListings])
        };
    };

    return (
        <>
            <div id="listing-header">
                <h3>Bikes to ride near you</h3>
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    activePage={activePage}
                />
                <hr id="listing-gallery-bar" color="#896a67" />
            </div>
            <div id="listing-gallery">
                {!listingsShown && <h3>Loading......</h3>}
                {(Array.isArray(listingsShown) === true) && listingsShown.map(listing => {
                    return <ListingCard theListing={listing} />;
                })}
            </div>
        </>
    );
}

export default ListingGallery;