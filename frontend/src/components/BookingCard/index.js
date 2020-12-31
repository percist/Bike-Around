import './BookingCard.css';

const BookingCard = ({ theBooking }) => {
    return (
        <>
            <div className="booking-card">
                <div className="booking-card-img">
                    <a href={`/bookings/${theBooking.id}`}>
                        <img 
                            alt="bike" 
                            id="booking-card-img"
                            src={theBooking.Listing.Pictures[0].url} 
                        />
                    </a>
                </div>
                <div className="booking-content">
                    <div className='booking-card_2'>
                        {`${theBooking.startDay} - ${theBooking.endDay}`}
                    </div>
                    <div className='booking-card_3'>
                        {theBooking.nearestCity}
                    </div>
                    <div className='booking-card_4'>
                        {theBooking.title}
                    </div>
                </div>
                <hr id="booking-card-bar" color="darkgray"/>
                {<div className="edit-booking-button">
                    Edit this Ride
                </div>
                }
            </div>
        </>
    )
}

export default BookingCard;