import React from 'react';
import './SearchBar.css'

const SearchBar = ({ query, setQuery, activePage }) => {
    const handleXClick = () => {
        setQuery("")
    }

    return (
        <div className="search-bar">
            <input 
                className="search-bar"
                key="random1"
                maxLength={60}
                value={query}
                placeholder={
                    activePage === "listings" ? "Search Rides" : 
                    activePage === "bookings" ? "Search Your Rides" : 
                    "Search Rides to Bike Around"
                }
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleXClick}
                className="x-button"
            >
                clear
            </button>
        </div>
    );
}

export default SearchBar;