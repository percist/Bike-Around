import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneListing } from '../../store/listings';
import './ListingPage.css';

const ListingPage = ({ theListing }) => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const history = useHistory();

    function handleClick() {
        history.push(`/bookings/${id}`)
    }

    const currentListing = useSelector(fullReduxState => {
        return fullReduxState.listings;
    });

    useEffect(async () => {
        dispatch(
            fetchOneListing(id)
        );
    }, []);
    console.log(currentListing.Pictures)
    return(
        <>
            <hr />
            <div className="listing-page-header"
                id="listing-page-header">
                <h2>
                    {currentListing.title}
                </h2>
                <p>
                    {currentListing.nearestCity}
                </p>
            </div>
            <div className="listing-page-gallery">
                <div id="listing-page-primary">
                    <img id="listing-page-primary_1" alt="bike" src={currentListing.Pictures && currentListing.Pictures[0].url}/>
                </div>
                <div  className="listing-page-gallery-images">
                    {currentListing.Pictures && currentListing.Pictures.map((pic, i) => {
                        if (i>0) {
                            return(
                                <div 
                                    className="listing-page-tile"
                                    id={`listing-page-gallery_${i}`}
                                >
                                    <img 
                                        className="listing-page-img"
                                        alt="bike" src={pic.url} 
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className={"listing-page-properties"}>
                <div className={"listing-page-properties_1"}> 
                    <h3>
                        {currentListing.BikeType && `${currentListing.BikeType.type} bike offered by ${currentListing.User.username}`} 
                    </h3>
                </div>
                <hr />
                <div className={"listing-page-properties_2"}>
                    {currentListing.description}
                </div>
                <div className={"listing-page-properties_5"}>
                    <button 
                        className="button"
                        id="reserve-button"
                        onClick={handleClick}
                    >
                        Check Availability
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListingPage