import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import CardSection from "../components/CardSection";
import "../stylesheets/pages/section.css";

const Section = () => {
    return (
        <>
        <Navbar />
        <div className="container section">
            <CardSection />  
        </div>
            <Footer />
        </>
    )
}
export default Section