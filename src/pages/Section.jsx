import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import CardSection from "../components/CardSection";


const Section = () =>{
    return(
        <div className="container">
        <Navbar />
            <CardSection />
        <Footer />
        </div>
    )
}
export default Section