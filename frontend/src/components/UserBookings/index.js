import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBookings } from '../../store/bookings';
import BookingCard from '../BookingCard';
const UserBookings = () => {
    const dispatch = useDispatch();

    const currentBookings = useSelector(fullReduxState => {
        return fullReduxState.bookings;
    })

    useEffect(async () => {
        await dispatch(setAllBookings());
        console.log(currentBookings)
        // await dispatch(setOneListing(currentBookings))
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
                    console.log(currentBookings)
                    return <BookingCard theBooking={booking} />
                })}
            </div>
        </>
    )
}

export default UserBookings