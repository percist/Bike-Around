import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { fetchOneListing } from "../../store/listings";
import { formatDate } from "../../date-repository";
import './BookingCard.css';

const BookingCard = ({ theBooking, allListings }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const theListing = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });
    
    useEffect( async() => {
        await dispatch(fetchOneListing(theBooking.listingId));
    }, []);

    return (
        <>
            <div className="booking-card">
                <div className="booking-card-img">
                    {!theListing.Pictures && <h3>Loading.....</h3>}
                    {theListing.Pictures && 
                        <a href={`/listings/${theListing.id}`}>
                            <img 
                                alt="bike" 
                                id="booking-card-img"
                                src={theListing.Pictures[0].url} 
                            />
                        </a>
                     }
                </div>
                <div className="booking-content">
                    <div className='booking-card_2'>
                        {`${formatDate(theBooking.startDay)} - ${formatDate(theBooking.endDay)}`}
                    </div>
                    <div className='booking-card_3'>
                        {theListing.nearestCity}
                    </div>
                    <div className='booking-card_4'>
                        {theListing.title}
                    </div>
                </div>
                <a className="edit-booking-button"
                        id="edit-booking-button"
                        href={`/listings/${theListing.id}/bookings/${theBooking.id}/edit`}
                    >
                    Edit this Ride
                </a>
                
            </div>
        </>
    )
}

export default BookingCard;