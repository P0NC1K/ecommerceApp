import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext.context' 

export default function PrivateRoute({ component: Component , ...restElements }) {
    const { currentUser } = useAuth();

    return (
       <Route
            { ...restElements }
            render = {props => {
                return currentUser ? <Component { ...props } /> : <Redirect to="/signIn" />
            }} 
        >
        </Route>
    )
}

