import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect( async () => {
    const res = await dispatch(sessionActions.restoreUser());
    setIsLoaded(true);
  }, [dispatch])

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;