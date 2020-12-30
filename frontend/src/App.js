import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import LoginFormPage from './components/LoginFormPage';
import SignupFormModal from './components/SignupFormModal';
import Navigation from './components/Navigation';
import HomePage from "./components/Home";
import ListingGallery from "./components/ListingGallery";

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
        </Switch>
      )}
    </>  
  );
}

export default App;