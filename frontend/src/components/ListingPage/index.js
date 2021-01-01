import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import { fetchCreateBooking } from '../../store/bookings';
import { DateRangePicker } from 'react-dates';
import './ListingPage.css';

const ListingPage = ({ theListing }) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [focusedInput, setFocusedInput] = useState('');

    const formatDate = (dateToParse) => {
        const year = dateToParse.getFullYear();
        const date = dateToParse.getDate();
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
        const monthName = months[dateToParse.getMonth()]
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
        const dayName = days[dateToParse.getDay()]
        return `${dayName}, ${monthName} ${date}, ${year}`
    }

    const findDuration = (date1, date2) => {
        const earlierDate = Date.parse(date1);
        const laterDate = Date.parse(date2);

        return Math.ceil(( laterDate - earlierDate ) / (60*60*24*1000))
    }

    const handleClick = async() => {
        const duration = findDuration(startDate, endDate);
        await dispatch(fetchCreateBooking({
            userId: id,
            startDay: startDate,
            endDay: endDate,
            status: "pending",
            duration: duration
        }));
        history.push(`/bookings/${id}`)

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