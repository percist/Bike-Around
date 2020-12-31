import { fetch } from '../../store/csrf';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Listing.css';




const ListingCard = ({ theListing }) => {
    return (
        <>
            <div className="listing">
                <a 
                    className="listing-img-div"
                    href={`/listings/${theListing.id}`}>
                    {console.log(theListing.Pictures[0])}
                    <img 
                        alt="bike" 
                        className="listing-img"
                        src={theListing.Pictures[0].url} 
                    />
                </a>
                <div className='listing-description'>
                    <p>{theListing.nearestCity}</p>
                    <p>{theListing.title}</p>
                    <div className='listing-description-price'>
                        <h3>{`$${theListing.pricePerDay/100}`}</h3>
                        <p>/day</p>
                    </div>
                </div>
            </div>
            <div className="listing-content">

            </div>
        </>
    )
}

export default ListingCard;