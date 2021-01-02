import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Navigation from './components/Navigation';
import HomePage from "./components/Home";
import ListingGallery from "./components/ListingGallery";
import ListingPage from "./components/ListingPage";
import BookingGallery from "./components/BookingGallery";
import BookingForm from "./components/BookingFormPage";
import BookingPage from "./components/BookingPage";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect( async () => {
    const res = await dispatch(sessionActions.restoreUser());
    setIsLoaded(true);
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route> 
          <Route path="/listings" exact>
            <ListingGallery />
          </Route> 
          <Route path="/listings/:id" exact>
            <ListingPage />
          </Route>
          <Route path="/bookings" exact>
            <BookingGallery />
          </Route>
          <Route path="/listings/:listingId/bookings/:bookingId/edit" >
            <BookingPage />
          </Route>
          <Route path="/listings/:listingId/bookings/:bookingId" exact>
            <BookingForm />
          </Route>
        </Switch>
      )}
    </>  
  );
}

export default App;