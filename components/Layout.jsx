import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
  {/* Render the Header component */}
            <Header />
            <main>
   {/* Render the nested routes (content) here */}
                <Outlet />
            </main>
    {/* Render the Footer component */}
            <Footer />
        </div>
    )
}