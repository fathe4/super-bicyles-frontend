import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = UseAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;