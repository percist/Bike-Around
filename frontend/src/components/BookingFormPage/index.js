import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchOneListing } from '../../store/listings';
import { fetchAllBookings } from '../../store/bookings';

const BookingForm = () => {
    const dispatch = useDispatch();

    const listing = useSelector(fullReduxState=> {
        return fullReduxState.listings;
    });

    const booking = useSelector(fullReduxState=> {
        return fullReduxState.bookings;
    })

    useEffect( async() => {
        await dispatch(fetchOneListing(id));
        await dispatch(fetchAllBookings)
    }, [])

    return(
        <>
            <div className="booking-form-header">
                <h2>
                    Confirm your Ride
                </h2>
            </div>
            <div className="booking-form-details">
                <div className="booking-form-details_1">
                    Your Ride
                </div>
                <div className="booking-form-details_2">
                    Dates
                </div>
                <div className="booking-form-details_3">
                    {`${booking.startDay}-${booking.endDay}`}
                </div>
                <hr className="booking-form-bar" color="darkgray" />
                <div className="booking-form-details_4">
                    Price Details
                </div>
                <div className="booking-form-details_5">
                    {`${listing.pricePerDay/100} x ${booking.startDay-booking.endDay}`}
                </div>
                <div className="booking-form-details_6">
                    Total (USD)
                </div>
                <div className="booking-form-details_7">
                    {`${parseInt(listing.pricePerDay/100) * parseInt(booking.startDay-booking.endDay)}`}
                </div>
            </div>
        </>
       
       
    )
}

export default BookingForm;