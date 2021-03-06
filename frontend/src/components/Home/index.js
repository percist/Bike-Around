import "./index.css"
import picture from "../../bike-around-header.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
    const history = useHistory();
    function handleClick() {
        history.push('/listings');
    }
    
    return (
        <div>
            <div id="home-page-container">
                <img 
                    id="home-page-container-img"
                    src={picture} 
                    alt="man on bike"
                />
                <div id="home-page-overlay">
                    <div id="home-page-cta">
                        <h1 id="home-page-cta_1">
                            Ride Near
                        </h1>
                        <button 
                            className="button"
                            id="home-page-cta_2"
                            onClick={handleClick}
                        >
                            Explore nearby bikes
                        </button>
                    </div>
                </div >
            </div>

        </div>
        
    );
}

export default HomePage;
