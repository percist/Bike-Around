import "./index.css"
import picture from "../../bike-around-header.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
    const history = useHistory();
    function handleClick() {
        history.push('/listings');
    }
    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
        <div>
            <div id="home-page-container">
                <img src={picture} />
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
                </div>
                {loggedInUser && <h3>Welcome {loggedInUser.username}, find a<Link to="/listings">Bike Around</Link>you!</h3>}
            </div>

        </div>
        
    );
}

export default HomePage;
