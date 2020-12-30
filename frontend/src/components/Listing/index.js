import { fetch } from '../../store/csrf';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';




const Listing = ({ theListing }) => {
    return (
        <>
            <div className="listing">
                <h3>{theListing.brand}</h3>
                <div className="listing-img">
                    {/* <img alt="bike" src={theListing.listingPictureId} /> */}
                </div>
            </div>
            <div className="listing-content">

            </div>
        </>
    )
}

export default Listing;