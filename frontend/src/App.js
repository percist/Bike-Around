import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Navigation from './components/Navigation';
import HomePage from "./components/Home";
import ListingGallery from "./components/ListingGallery";
import ListingPage from "./components/ListingPage";
import UserBookings from "./components/UserBookings";
import BookingForm from "./components/BookingFormPage";

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
        {/* //   <Route path="/login">
        //     <LoginFormPage />
        //   </Route> 
          <Route path="/signup">
            <SignupFormPage />
          </Route>*/}
          <Route path="/" exact>
            <HomePage />
          </Route> 
          <Route path="/listings" exact>
            <ListingGallery />
          </Route> 
          <Route path="/listings/:id">
            <ListingPage />
          </Route>
          <Route path="/bookings" exact>
            <UserBookings />
          </Route>
          <Route path="/bookings/:id" >
            <BookingForm />
          </Route>
        </Switch>
      )}
    </>  
  );
}

export default App;