import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookings } from '../../store/bookings';
import { fetchAllListings } from '../../store/listings';
import BookingCard from '../BookingCard';

const BookingGallery = () => {
    const dispatch = useDispatch();

    let currentBookings = useSelector(fullReduxState => {
        return fullReduxState.bookings;
    });

    let allListings = useSelector(fullReduxState => {
        return fullReduxState.listings
    })

    useEffect(async () => {
        await dispatch(fetchAllBookings());
        await dispatch(fetchAllListings())
    }, []);

    return(
        <>
            <div id="bookings-header">
                <h3>Bikes</h3>
                <hr id="bookings-bar" color="darkgray" />
            </div>
            <div id="bookings-gallery">
                {!currentBookings && <h3>Loading.....</h3>}
                {currentBookings && currentBookings.map(booking => {
                    return <BookingCard theBooking={booking} allListings={allListings}/>
                })}
            </div>
        </>
    )
}

export default BookingGallery