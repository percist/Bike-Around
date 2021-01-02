import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchEditBooking, fetchOneBooking, fetchDeleteBooking } from '../../store/bookings';
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
    const [showUpdated, setShowUpdated] = useState(false);
    const [isCanceled, setIsCanceled] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [focusedInput, setFocusedInput] = useState([]);
    const [errors, setErrors] = useState([]);

    const calculateDuration = (begin, end) =>{
        return Math.ceil(end.diff(begin) / (60*60*24*1000))
    };
    
    const handleEditClick = async() => {
        if (!startDate || !endDate){
            return setErrors(['Please select a start date and an end date to check availability.'])
        }
        setErrors([]);

        const duration = calculateDuration(startDate, endDate) ;

        const updatedBooking = await dispatch(fetchEditBooking({
            bookingId: bookingId,
            startDay: startDate.toDate(),
            endDay: endDate.toDate(),
            duration: duration
        }));
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const handleReturnClick = async() => {
        history.push(`/listings/${listingId}/bookings/${bookingId}`);
    }

    const handleCancelClick = async() => {
        await dispatch(fetchDeleteBooking(bookingId));
        setIsCanceled(true)
    }

    function handleSearchClick() {
        history.push('/listings');
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
        setShowUpdated(false);
        setStartDate(bookingId.startDay);
        setEndDate(bookingId.endDay);
    }, []);

    let bookingContent;

    if (!isCanceled || currentBooking === undefined) {
        bookingContent = (
            <>
                <h3> Your Ride Details</h3>
                <hr id="ride-details-bar" color="#6B4D57" />
                <div className="booking-details-properties_1">
                    <h4>{`Start Date: ${formatDate(currentBooking.startDay)}`}</h4>
                    <h4>{`End Date: ${formatDate(currentBooking.endDay)}`}</h4>

                </div>
                <div className="booking-details-properties_2">
                    <div className="booking-detials-properties_2_1">
                        {`$${currentListing.pricePerDay/100}.00 / day x ${currentBooking.duration} days - $${(currentListing.pricePerDay/100)*(currentBooking.duration)}.00`}
                    </div>
                    <hr id="booking-details-bar" color="#6B4D57" />
                    Update Dates Below
                    {errors.map((error, idx) => <li key={`map-${idx}`}>{error}</li>)}
                    <div className="booking-details-properties_2_2">
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
                    <a 
                        id="booking-details-confirmation"
                    >

                    </a>
                    <button 
                        className="button"
                        id="update-button"
                        onClick={handleEditClick}
                        >
                        Update Your Ride
                    </button>
                </div>
            </>
        );
    }else{
        <>
            <h2>Your Ride has been cancelled</h2>
            <button 
                className="button"
                id="search-button"
                onClick={handleSearchClick}
            >
                Explore other bikes
            </button>
        </>
    }
            

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
                {bookingContent}
                <button 
                    className="button"
                    id="cancel-booking-button"
                    onClick={handleCancelClick}
                >
                    Cancel Your Ride
                </button>
                <button 
                    className="button"
                    id="return-to-booking-button"
                    onClick={handleReturnClick}
                >
                    Return to Ride Details
                </button>
            </div>
        </div>
    )



};

export default BookingPage;