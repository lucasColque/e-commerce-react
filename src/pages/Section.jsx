import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import CardSection from "../components/CardSection";


const Section = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            
            <CardSection />
            
        </div>
            <Footer />
        </>
    )
}
export default Section