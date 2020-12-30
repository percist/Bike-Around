import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

import './Listing.css';

const ListingSearchModal = ({})=> {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="button search-filter-button"
                onClick={() => setShowModal(true)}
            >
                Type of Bike
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* <TypeSearchForm /> */}
                </Modal>
            )}
        </>
    )
}

// QUESTIONS: 
// How do i send search params through the route - did we go over that?
// How do I structure the modal to be a reusable thing or do I?
// If I implement like this will I need a description of each item in my bikeType name?
// Where do I put the dispatch actions, in the modal itself?


export default ListingSearchModal