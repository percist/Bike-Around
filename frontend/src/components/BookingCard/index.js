import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchOneListing } from "../../store/listings";
import './BookingCard.css';

const BookingCard = ({ theBooking }) => {
    const dispatch = useDispatch();

    let currentListing = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    
    useEffect( async() => {
        console.log("THIS IS THE BOOKING LISTINGID", theBooking.listingId)
        await dispatch(fetchOneListing(theBooking.listingId));
    }, []);

    console.log(currentListing.Pictures[0].url)

    return (
        <>
            <div className="booking-card">
                <div className="booking-card-img">
                    <a href={`/listings/${currentListing.id}`}>
                        <img 
                            alt="bike" 
                            id="booking-card-img"
                            // src={currentListing.Pictures[0].url} 
                        />
                    </a>
                </div>
                <div className="booking-content">
                    <div className='booking-card_2'>
                        {`${theBooking.startDay} - ${theBooking.endDay}`}
                    </div>
                    <div className='booking-card_3'>
                        {currentListing.nearestCity}
                    </div>
                    <div className='booking-card_4'>
                        {currentListing.title}
                    </div>
                </div>
                <hr id="booking-card-bar" color="darkgray"/>
                <div className="edit-booking-button">
                    Edit this Ride
                </div>
                
            </div>
        </>
    )
}

export default BookingCard;