import React from 'react';
import {Route, useNavigate} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/login');
    }
    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> :  handleNavigate()
            }
        />
    );
};

export default PrivateRoute;
