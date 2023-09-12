import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import CardSection from "../components/CardSection";
import { useParams } from "react-router-dom";
import "../../src/stylesheets/pages/section.css";

const Section = () => {
    const name = useParams();
    useEffect(() => {
        // Llevar la página a la parte superior cuando se carga el componente
        window.scrollTo(0, 0);
    }, []);
    return (
        
        <>
        <Navbar />
        <div className="container section">
            <CardSection {...name}/>  
        </div>
            <Footer />
        </>
    )
}
export default Section