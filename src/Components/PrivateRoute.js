import React from 'react';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children,isAuth, ...rest }) {
    return (
        <Route {...rest} >
            {isAuth === true ? children : <Redirect to='/login'/>}
            </Route>
    );
}

export default PrivateRoute;