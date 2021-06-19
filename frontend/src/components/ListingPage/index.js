import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchCreateBooking } from '../../store/bookings';
import { findDuration } from '../../date-repository';
import './ListingPage.css';


const ListingPage = ({ theListing }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const listingId = id;

    const sessionUser = useSelector(state => state.session.user);
    const currentListing = useSelector(state => state.listings);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState([]);
    
    const handleClick = async() => {
        const newErrors = [];
        if (!startDate || !endDate){
            newErrors.push( 'Please select a start date and an end date to check availability.');
        }
        if (startDate > endDate){
            newErrors.push( 'Please choose an end date after your chosen start date.');
        }
        if (!sessionUser){
            newErrors.push('Please login or sign up to check availability.');
        }
        if (newErrors.length === 0){
            const duration = findDuration(startDate, endDate) ;
    
            const newBooking = await dispatch(fetchCreateBooking({
                listingId: listingId,
                userId: sessionUser.id,
                startDay: startDate,
                endDay: endDate,
                status: "pending",
                duration: duration
            }));
            if (newBooking){
              const bookingId = newBooking.id;
              history.push(`/listings/${listingId}/bookings/${bookingId}`);
              return null
            }else{
              newErrors.push('This ride is booked for one or more of those days. Please try another date or another ride.')
            }
        }
        setErrors(newErrors)
    }

    useEffect( () => {
        dispatch(fetchOneListing(id));
    }, [dispatch,id]);
    
    return(
        <>
            <div className="listing-page-header"
                id="listing-page-header">
                <h2>
                    {currentListing.title}
                </h2>
                <p>
                    {currentListing.nearestCity}
                </p>
            </div>
            <div className="listing-page-gallery">
                <div id="listing-page-primary">
                    <img id="listing-page-primary_1" alt="bike" src={currentListing.Pictures && currentListing.Pictures[0].url}/>
                </div>
                <div  className="listing-page-gallery-images">
                    {currentListing.Pictures && currentListing.Pictures.map((pic, i) => {
                        if (i>0) {
                            return(
                                <div 
                                    className="listing-page-tile"
                                    id={`listing-page-gallery_${i}`}
                                    key={`listing-page-gallery_${i}`}
                                >
                                    <img 
                                        className="listing-page-img"
                                        alt="bike" src={pic.url} 
                                    />
                                </div>
                            )
                        }
                        else return null;
                    })}
                </div>
            </div>
            <div className="listing-page-properties">
                <div className="listing-page-properties_2">
                    <div className="listing-page-properties_2_1">
                        {`$${currentListing.pricePerDay/100} / day`}
                    </div>
                    {errors.map((error, idx) => <li key={`listing-page-error_${idx}`}>{error}</li>)}
                    <div className="listing-page-properties_2_2">
                      <div className="listing-page-dates">
                        <div className="listing-page-dates_start">
                          <label>Start Date</label>
                          <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                          />
                        </div>                  
                        <div className="listing-page-dates_end">
                          <label>End Date</label>
                          <input
                          type="date"
                          min={startDate}
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <button 
                        className="button"
                        id="reserve-button"
                        onClick={handleClick}
                        >
                        Check Availability
                    </button>
                </div>
                <div className="listing-page-properties_1">
                    <div className="listing-page-properties_1_1"> 
                        <h3>
                            {currentListing.BikeType && `${currentListing.BikeType.type} bike offered by ${currentListing.User.username}`} 
                        </h3>
                    </div>
                    <hr />
                    <div className="listing-page-properties_1_2">
                        {currentListing.description}
                    </div>
                    <div className="listing-page-properties_1_3">
                        Size: {currentListing.BikeSize && currentListing.BikeSize.name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingPage;