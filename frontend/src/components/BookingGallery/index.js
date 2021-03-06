import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookings } from '../../store/bookings';
import SearchButton from '../SearchButton';
import BookingCard from '../BookingCard';
import './BookingGallery.css';

const BookingGallery = () => {
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState("bookings");
    const [bookingsShown, setBookingsShown] = useState([]);
    const [query, setQuery] = useState('');

    let currentBookings = useSelector(state => state.bookings);

    useEffect( () => {
        dispatch(fetchAllBookings());
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
                    return <BookingCard theBooking={booking} key={booking.id}/>
                })}
            </div>
        </>
    )
}

export default BookingGallery