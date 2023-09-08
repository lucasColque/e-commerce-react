import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import cards from "../helper/funkopop"


const DetailCharacter = () =>{
    const id = useParams();
    console.log(id);
    return(
        <div className="container">
        <Navbar />
        {cards.map(card => (card.id == id.id?  <Card key={card.id} {...card} button={false}/>:console.log('No es igual')) )}
        
        <Footer />
        </div>
    )
}
export default DetailCharacter