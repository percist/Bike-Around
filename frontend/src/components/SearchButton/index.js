import React from 'react';
import '../BookingGallery/BookingGallery.css';

const SearchButton = ({ content, query, setQuery }) => {
    
    const handleClick = () => {
        setQuery(query)
    }

    return (
        <div className="search-button">
            <button 
                id="search-button"
                onClick={handleClick}
            >
                {content}
            </button>
        </div>
    );
}

export default SearchButton;