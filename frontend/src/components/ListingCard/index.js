import { fetch } from '../../store/csrf';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ListingCard.css';




const ListingCard = ({ theListing }) => {
    return (
        <>
            <div className="listing-card">
                <div
                    className="listing-card_1"
                >
                    <a 
                        className="listing-card_1_1"
                        href={`/listings/${theListing.id}`}
                    >
                        <img 
                            alt="bike" 
                            className="listing-img"
                            src={theListing.Pictures[0].url} 
                        />
                            <div id="listing-card-overlay"/>
                    </a>
                </div>
                <div className='listing-card_2'>
                    <p>{theListing.nearestCity}</p>
                    <p>{theListing.title}</p>
                <div className='listing-card_3'>
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