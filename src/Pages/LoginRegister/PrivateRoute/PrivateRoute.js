import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth()

    if (isLoading) {
        return <Spinner animation="grow" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;