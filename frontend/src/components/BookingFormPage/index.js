import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { fetchOneListing } from '../../store/listings';
import { fetchOneBooking, fetchConfirmBooking } from '../../store/bookings';
import { formatDate} from '../../date-repository';
import './BookingFormPage.css';

const BookingForm = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { listingId, bookingId } = params;
    const history = useHistory();

    const currentListing = useSelector(fullReduxState=> {
        return fullReduxState.listings;
    });

    const booking = useSelector(fullReduxState=> {
        return fullReduxState.bookings;
    })

    const startDate = formatDate(booking.startDay);
    const endDate = formatDate(booking.endDay);

    const handleConfirm = async(e) => {
        e.preventDefault();
        await dispatch(fetchConfirmBooking(bookingId));
        history.push(`/listings/${listingId}/bookings/${bookingId}/edit`);
    }

    useEffect( async() => {
        await dispatch(fetchOneListing(listingId));
        await dispatch(fetchOneBooking(bookingId));
    }, [])

    return(
        <>
            <div className="booking-form-header">
                <h2>
                    Confirm your Ride
                </h2>
            </div>
            <div className="booking-form-listing">
                <div className="booking-form-listing-details">
                    <div className="booking-form-listing-details_1">
                        <h3>Your Ride</h3>
                    </div>
                    <div className="booking-form-listing-details_2">
                        <h4>Dates</h4>
                    </div>
                    <div className="booking-form-listing-details_3">
                        {`${startDate} - ${endDate}`}
                    </div>
                </div>
                <div className="booking-form-listing-img">
                    <img 
                        id="booking-form-listing-img" 
                        alt="bike" 
                        src={currentListing.Pictures && currentListing.Pictures[0].url}
                    />
                    <div id="booking-form-listing-button">
                        <a>                            
                            <h4><Link to={`/listings/${listingId}/bookings/${bookingId}/edit`}>Edit your Ride</Link></h4>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="booking-form-bar" color="darkgray" />
            <div className="booking-form-booking">
                <div className="booking-form-booking-details">
                    <div className="booking-form-booking-details_1">
                        <h3>Price Details</h3>
                    </div>
                    <div className="booking-form-booking-details_2">
                        {`$${currentListing.pricePerDay/100} x ${booking.duration} days`}
                    </div>
                    <div className="booking-form-booking-details_3">
                        <h4>Total (USD)</h4>
                    </div>
                    <div className="booking-form-booking-details_4">
                        {`$${(currentListing.pricePerDay/100) * booking.duration}`}
                    </div>
                </div>
                <button 
                    id="confirm-booking-button"
                    onClick={handleConfirm}
                    >
                    Confirm!
                </button>
            </div>
        </>
       
       
    )
}

export default BookingForm;