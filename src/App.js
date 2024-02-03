import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/counter/userSlice';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {
  const user = null
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(login)
    } else {
      dispatch(logout)

    }
  });

  return (

    <Provider store={store}>
      <div className="app">

        <Router>
          {!user ? (
            <LoginScreen />
          ) : (

            <Switch>
              <Route exact path="/">
                <HomeScreen />

              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
