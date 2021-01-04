import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookings } from '../../store/bookings';
import { fetchAllListings } from '../../store/listings';
import SearchButton from '../SearchButton';
import BookingCard from '../BookingCard';
import './BookingGallery.css';

const BookingGallery = () => {
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState("bookings");
    const [bookingsShown, setBookingsShown] = useState([]);
    const [query, setQuery] = useState('');

    let currentBookings = useSelector(fullReduxState => {
        console.log("CURRENT BOOKINGS AFTER USESELECTOR:", fullReduxState.bookings)
        return fullReduxState.bookings;
    });

    let allListings = useSelector(fullReduxState => {
        return fullReduxState.listings
    })

    useEffect( () => {
        dispatch(fetchAllBookings());
        dispatch(fetchAllListings());
    }, [dispatch]);
        
    useEffect(() => {
        const bookingsToFilter = [...currentBookings]
        function filterBookings () {
            if(query.length > 0) {
                let newBookings = bookingsToFilter.filter(booking => booking.status === query);
                setBookingsShown([...newBookings]);
            } else if (query.length === 0) {
                setBookingsShown([...bookingsToFilter]);
            };
        };
        filterBookings()
    }, [query, currentBookings]);
        
    // based on Tyler Funk Medium article "Build a Custom React Search Bar Component Using a Dyanmic Regex" Oct 31, 2020
    // https://medium.com/dev-genius/build-a-custom-react-search-bar-component-using-a-dynamic-regex-cd89fdd496f5

    return(
        <>
            <div id="bookings-header">
                <div id="bookings-header_1"
                    onClick={()=>setBookingsShown(currentBookings)}
                >
                    <h3>My Rides</h3>
                </div>
                <div id="bookings-header_2">
                    <SearchButton
                        query={"confirmed"}
                        content={"Upcoming"}
                        setQuery={setQuery}
                        activePage={activePage}
                    />
                    <SearchButton
                        query={"complete"}
                        content={"Past"}
                        setQuery={setQuery}
                        activePage={activePage}
                    />
                    <SearchButton
                        query={"cancelled"}
                        content={"Cancelled"}
                        setQuery={setQuery}
                        activePage={activePage}
                    />
                </div>
            </div>
            <hr id="bookings-bar" color="#896a67" />
            <div id="bookings-gallery">
                {!bookingsShown && <h3>Loading.....</h3>}
                {bookingsShown && bookingsShown.map(booking => {
                    return <BookingCard theBooking={booking} allListings={allListings}/>
                })}
            </div>
        </>
    )
}

export default BookingGallery