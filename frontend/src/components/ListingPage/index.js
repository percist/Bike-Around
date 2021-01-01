import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchCreateBooking } from '../../store/bookings';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import './ListingPage.css';

moment().format();

const calculateDuration = (begin, end) =>{
    return Math.ceil(end.diff(begin) / (60*60*24*1000))
};

const ListingPage = ({ theListing }) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [focusedInput, setFocusedInput] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleClick = async() => {
        if (startDate && endDate){
            setErrors([]);
            // console.log(startDate.format("ddd, MMM Do, YYYY"))
            const duration = calculateDuration(startDate, endDate) 
            // console.log("START AND END DATE MOMENTS", startDate, endDate)
            // console.log(typeof(startDate._d), startDate._d)
            // console.log("START AND END DATE MOMENTS .TODATE()", startDate.toDate(), endDate.toDate())
            // console.log(typeof(startDate.toDate()), startDate.toDate())
            await dispatch(fetchCreateBooking({
                listingId: id,
                userId: sessionUser.id,
                startDay: startDate.toDate(),
                endDay: endDate.toDate(),
                status: "pending",
                duration: duration
            }));
            history.push(`/bookings/${id}`)
        }
        return setErrors(['Please select a start date and an end date to check availability.'])

    }

    const currentListing = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    useEffect(async () => {
        dispatch(
            fetchOneListing(id)
        );
    }, []);
    
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
                                >
                                    <img 
                                        className="listing-page-img"
                                        alt="bike" src={pic.url} 
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className={"listing-page-properties"}>
                <div className={"listing-page-properties_1"}>
                    <div className={"listing-page-properties_1_1"}> 
                        <h3>
                            {currentListing.BikeType && `${currentListing.BikeType.type} bike offered by ${currentListing.User.username}`} 
                        </h3>
                    </div>
                    <hr />
                    <div className={"listing-page-properties_1_2"}>
                        {currentListing.description}
                    </div>
                </div>
                <div className={"listing-page-properties_2"}>
                    <div className={"listing-page-properties_2_1"}>
                        {`$${currentListing.pricePerDay/100} / day`}
                    </div>
                    {errors.map((error, idx) => <li key={`map-${idx}`}>{error}</li>)}
                    <div className={"listing-page-properties_2_2"}>
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
                        Check Availability
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListingPage