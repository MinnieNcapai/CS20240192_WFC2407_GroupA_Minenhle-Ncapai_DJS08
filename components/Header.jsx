import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header() {
 // Define styles for active links
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

// Function to simulate logging out (removes "loggedin" from localStorage)
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
{/* Site logo that links to the homepage */}
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
 {/* Navigation links with active link styling */}
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
 {/* Login link with avatar icon */}
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
 {/* Log out button */}
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}