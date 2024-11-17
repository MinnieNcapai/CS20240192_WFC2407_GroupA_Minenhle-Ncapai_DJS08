import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
// Check if the user is logged in
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
  
 // If not logged in, redirect to login page with a message
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{
                    message: "You must log in first",
                    from: location.pathname
                }} 
                replace
            />)
    }
 // If logged in, show the child routes
    return <Outlet />
}