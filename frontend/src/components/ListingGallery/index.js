import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ListingCard from '../ListingCard';
import SearchBar from '../SearchBar';
import { fetchAllListings } from '../../store/listings';
import './ListingGallery.css'

const ListingGallery = () => {
  const dispatch = useDispatch();

  const currentListings = useSelector(state => state.listings);

  const [activePage, setActivePage] = useState("listings");
  const [listingsShown, setListingsShown] = useState([])
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [dispatch]);

  useEffect(() => {
    const listingsRegex = new RegExp(query, "i")
    function filterListings() {
      if (query.length > 0) {
        const titleListings = currentListings.filter(listing => listingsRegex.test(listing.title))
        const descriptionListings = currentListings.filter(listing => listingsRegex.test(listing.description))
        const sizeListings = currentListings.filter(listing => listingsRegex.test(listing.BikeSize.name))
        const typeListings = currentListings.filter(listing => listingsRegex.test(listing.BikeType.type))
        const cityListings = currentListings.filter(listing => listingsRegex.test(listing.nearestCity))
        const allListings = [...titleListings, ...descriptionListings, ...sizeListings, ...typeListings, ...cityListings]
        const uniqueListings = [...new Set(allListings)].sort((a,b)=>a.id - b.id)
        setListingsShown(uniqueListings)
      } else if (query.length === 0) {
        setListingsShown(currentListings)
      };
    };
    filterListings()
  }, [currentListings, query]);

  return (
    <div id="lising-gallery-page">
      <div id="listing-header">
        <div id="listing-header-content">
          <h3>Bikes to ride near you</h3>
          <SearchBar
            query={query}
            setQuery={setQuery}
            activePage={activePage}
          />
          <h3>{listingsShown.length} results matched your search</h3>
        </div>
        <hr id="listing-gallery-bar" color="#896a67" />
      </div>
      <div id="listing-gallery">
        {!listingsShown && <h3>Loading......</h3>}
        {(Array.isArray(listingsShown) === true) && listingsShown.map(listing => {
          return <ListingCard theListing={listing} key={listing.id}/>;
        })}
      </div>
    </div>
  );
}

export default ListingGallery;