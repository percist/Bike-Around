import './ListingCard.css';

const ListingCard = ({ theListing }) => {
    return (
        <>
            <div className="listing-card">
                <div className="listing-card-container">
                    <a href={`/listings/${theListing.id}`}>
                        <img 
                            alt="bike" 
                            className="listing-card-img"
                            src={theListing.Pictures[0].url} 
                        />
                    </a>
                </div>
                <div className="listing-content">
                    <div className='listing-card-content_2'>
                        {`${theListing.BikeType.type} bike - ${theListing.nearestCity}`}
                    </div>
                    <div className='listing-card-content_3'>
                        {theListing.title}
                    </div>
                    <div className='listing-card-content_4'>
                        {`$${theListing.pricePerDay/100} / day`}
                    </div>
                    <hr className='listing-card-bar' color="#896a67" />
                </div>
            </div>
        </>
    )
}

export default ListingCard;