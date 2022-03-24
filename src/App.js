import React, { useState } from 'react';
import Navigation from "./Components/Navigation";
import Homepage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Blog from "./Components/Pages/Blog";
import Blogpost from "./Components/Pages/Blogpost";
import './App.css';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
  const isAuth = toggleIsAuthenticated(true);


  return (
    <div>
      <Navigation/>
        <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>
            <Route path='/login'>
                <Login isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            </Route>
            <PrivateRoute path='/blog/:id' isAuth ={toggleIsAuthenticated}>
            <Blogpost/>
            </PrivateRoute>
            <PrivateRoute exact path='/blog' isAuth={toggleIsAuthenticated}>
                <Blog/>
            </PrivateRoute>
        </Switch>
    </div>
  );
}

export default App;
