import React, { useState } from 'react';
import Navigation from "./Components/Navigation";
import Homepage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Blog from "./Components/Pages/Blog";
import Blogpost from "./Components/Pages/Blogpost";
import PrivateRoute from "./Components/PrivateRoute";
import './App.css';
import {Route, Switch} from "react-router-dom";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);



  return (
    <div>
      <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
        <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>
            <Route path='/login'>
                <Login toggleAuth={toggleIsAuthenticated}/>
            </Route>
            <PrivateRoute path='/blog/:id' isAuth={isAuthenticated}>
            <Blogpost/>
            </PrivateRoute>
            <PrivateRoute exact path='/blog' isAuth={isAuthenticated}>
                <Blog/>
            </PrivateRoute>
        </Switch>
    </div>
  );
}

export default App;
