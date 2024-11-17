import React from "react"
import bgImg from "../assets/images/about-hero.png" // Import background image for the page
import { Link } from "react-router-dom"  // Import Link to navigate to other pages

export default function About() {
    return (
        <div className="about-page-container">
 {/* Display the background image at the top of the page */}
            <img src={bgImg} className="about-hero-image" />
 {/* Content section of the About page */}
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
  {/* Description of the company's mission and van rental service */}
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}