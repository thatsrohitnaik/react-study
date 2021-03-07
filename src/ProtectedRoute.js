import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import querystring from "querystring";

const ProtectedRoute = (props) => {
    const Component = props.component;
    const isAuthenticated = true;

    let location = (useLocation().search).replace("?","");

//    console.log(querystring.parse(location))

    return isAuthenticated ? (
        <Component />
    ) : (
            <Redirect to={{ pathname: '/' }} />
        );
}

export default ProtectedRoute;