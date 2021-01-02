import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchEditBooking, fetchOneBooking } from '../../store/bookings';
import { DateRangePicker } from 'react-dates';
import { formatDate } from '../../date-repository';
import moment from 'moment';
import './BookingPage.css';

const BookingPage = ({ theBooking }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const { listingId, bookingId } = params;
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [focusedInput, setFocusedInput] = useState([]);
    const [errors, setErrors] = useState([]);

    const calculateDuration = (begin, end) =>{
        return Math.ceil(end.diff(begin) / (60*60*24*1000))
    };
    
    const handleClick = async() => {
        if (!startDate || !endDate){
            return setErrors(['Please select a start date and an end date to check availability.'])
        }
        setErrors([]);

        const duration = calculateDuration(startDate, endDate) ;

        const updatedBooking = await dispatch(fetchEditBooking({
            listingId: listingId,
            userId: sessionUser.id,
            startDay: startDate.toDate(),
            endDay: endDate.toDate(),
            duration: duration
        }));
        const bookingId = updatedBooking.id;
        history.push(`/listings/${listingId}/bookings/${bookingId}`);
    }

    const currentListing = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    const currentBooking = useSelector(fullReduxState => {
        return fullReduxState.bookings;
    });

    useEffect(async () => {
        dispatch(
            fetchOneListing(listingId)
        );
        dispatch(
            fetchOneBooking(bookingId)
        );
        setStartDate(bookingId.startDay);
        setEndDate(bookingId.endDay);
    }, []);

    return(
        <div className="booking-page">
            <div className="listing-details">
                <div className="booking-page-header"
                    id="booking-page-header">
                    <h2>
                        {currentListing.title}
                    </h2>
                    <p>
                        {currentListing.nearestCity}
                    </p>
                </div>
                <div className="booking-page-gallery">
                    <div id="booking-page-primary">
                        <img id="booking-page-primary_1" alt="bike" src={currentListing.Pictures && currentListing.Pictures[0].url}/>
                    </div>
                    {/* <div  className="listing-page-gallery-images">
                        {currentListing.Pictures && currentListing.Pictures.map((pic, i) => {
                            if (i>0) {
                                return(
                                    <div 
                                        className="listing-page-tile"
                                        id={`listing-page-gallery_${i}`}
                                    >
                                        <img 
                                            className="listing-page-img"
                                            alt="bike" src={pic.url} 
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div> */}
                </div>
                <div className="booking-page-properties">
                    <div className="booking-page-properties_1">
                        <div className="booking-page-properties_1_1"> 
                            <h3>
                                {currentListing.BikeType && `${currentListing.BikeType.type} bike offered by ${currentListing.User.username}`} 
                            </h3>
                        </div>
                        <hr />
                        <div className="booking-page-properties_1_2">
                            {currentListing.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-details">
                <h3> Your Ride Details</h3>
                <hr className="ride-details-bar" color="#6B4D57" />
                <div className="booking-details-properties_1">
                    <h4>{`Start Date: ${formatDate(currentBooking.startDay)}`}</h4>
                    <h4>{`End Date: ${formatDate(currentBooking.endDay)}`}</h4>

                </div>
                <div className="booking-details-properties_2">
                    <div className="booking-detials-properties_2_1">
                        {`$${currentListing.pricePerDay/100} / day`}
                    </div>
                    {errors.map((error, idx) => <li key={`map-${idx}`}>{error}</li>)}
                    <div className="booking-detials-properties_2_2">
                        <div className="App">
                            <DateRangePicker
                                startDateId="startDate"
                                endDateId="endDate"
                                startDate={startDate}
                                endDate={endDate}
                                onDatesChange={({ startDate, endDate }) => { 
                                    setStartDate(startDate); 
                                    setEndDate(endDate);
                                }}
                                focusedInput={focusedInput}
                                onFocusChange={(focusedInput) => {setFocusedInput(focusedInput)}}
                                />
                        </div>                    
                    </div>
                    <button 
                        className="button"
                        id="reserve-button"
                        onClick={handleClick}
                        >
                        Update Booking
                    </button>
                    <div className="booking-details-properties_2_3">
                        <Link
                            id="edit-booking-cancel-button"
                            to={`/listings/${listingId}/bookings/${bookingId}`}
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )



};

export default BookingPage;