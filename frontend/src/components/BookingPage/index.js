import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchEditBooking, fetchOneBooking, fetchCancelBooking } from '../../store/bookings';
import { formatDate, findDuration } from '../../date-repository';
import moment from 'moment';
import './BookingPage.css';

moment().format();

const BookingPage = ({ theBooking }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { listingId, bookingId } = params;
  const history = useHistory();
  const [updated, setUpdated] = useState(false)
  const [cancelled, setCancelled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState([])

  const handleEditClick = async () => {
    if (!startDate || !endDate) {
      return setErrors(['Please select a start date and an end date to check availability.'])
    }
    setErrors([]);

    const duration = findDuration(startDate, endDate);

    const updatedBooking = await dispatch(fetchEditBooking({
      bookingId: bookingId,
      startDay: new Date(startDate),
      endDay: new Date(endDate),
      duration: duration
    }));
    setStartDate(startDate);
    setEndDate(endDate);
    if (updatedBooking) {
      return setMessage(["Your Ride has been Updated."])
    }
  }

  const handleReturnClick = () => {
    history.push(`/listings`);
  }

  const handleCancelClick = async () => {
    await dispatch(fetchCancelBooking(bookingId))
    setUpdated(false);
    setCancelled(true)
    return setMessage(["Your Ride has been Cancelled."])

  }

  const currentListing = useSelector(state => state.listings);
  const currentBooking = useSelector(state => state.bookings);

  useEffect(() => {
    dispatch(
      fetchOneListing(listingId)
    );
    dispatch(
      fetchOneBooking(bookingId)
    );

  }, [dispatch, bookingId, listingId]);

  useEffect(() => {
    setUpdated(false);
    if(currentBooking.startDay && currentBooking.endDay){
    setStartDate((new Date(currentBooking.startDay).toISOString().slice(0, 10)));
    setEndDate((new Date(currentBooking.endDay).toISOString().slice(0, 10)))
    }
  }, [currentBooking.startDay, currentBooking.endDay])

  useEffect(() => {
    if (currentBooking.status === "cancelled") {
      setCancelled(true)
    }
  }, [currentBooking.status])

  return (
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
            <img id="booking-page-primary_1" alt="bike" src={currentListing.Pictures && currentListing.Pictures[0].url} />
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
        <h3> Your Ride Details</h3>
        <hr id="ride-details-bar" color="#6B4D57" />
        <div id="booking-details-confirmation">
          {message.map((message, idx) => <li key={`message-${idx}`}>{message}</li>)}
        </div>
        <div className="booking-details-properties_1">
          <h4>{`Start Date: ${formatDate(currentBooking.startDay)}`}</h4>
          <h4>{`End Date: ${formatDate(currentBooking.endDay)}`}</h4>

        </div>
        <div className="booking-details-properties_2">
          <div className="booking-detials-properties_2_1">
            {`$${currentListing.pricePerDay / 100}.00 / day x ${currentBooking.duration} days - $${(currentListing.pricePerDay / 100) * (currentBooking.duration)}.00`}
          </div>
          <hr id="booking-details-bar" color="#6B4D57" />
                    Update Dates Below
                    {errors.map((error, idx) => <li key={`map-${idx}`}>{error}</li>)}
          <div className="booking-details-properties_2_2">
            {!startDate && <h3>Loading......</h3>}
            {startDate &&
              <div className="booking-page-dates">
                <div className="booking-page-dates_start">
                  <label>Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="booking-page-dates_end">
                  <label>End Date</label>
                  <input
                  type="date"
                  min={startDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>}
          </div>
          <div className="booking-details-buttons">
            <button
              className="button"
              id="update-button"
              hidden={cancelled}
              onClick={handleEditClick}
            >
              Update Your Ride
                        </button>
            <button
              hidden={cancelled}
              className="button"
              id="cancel-button"
              onClick={handleCancelClick}
            >
              Cancel Ride
                        </button>
            <button
              className="button"
              id="return-button"
              onClick={handleReturnClick}
            >
              Find another Ride
                        </button>
          </div>
        </div>
      </div>
    </div>
  )



};

export default BookingPage;