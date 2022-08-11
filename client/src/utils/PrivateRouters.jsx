import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRouters = () => {
    let access_token = JSON.parse(localStorage.getItem('user'))
    return (
        access_token ? <Outlet/> : <Navigate to="/login"/>
    );
};

export default PrivateRouters;