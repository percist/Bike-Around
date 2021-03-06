import React from 'react';
import './SearchBar.css'

const SearchBar = ({ query, setQuery, activePage }) => {
    const handleXClick = () => {
        setQuery("")
    }

    return (
        <div id="search-bar">
            <input 
                id="search-bar-1"
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
                className="clear-button"
            >
                clear
            </button>
        </div>
    );
}

export default SearchBar;