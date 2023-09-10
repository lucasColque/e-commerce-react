import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import cards from "../helper/funkopop"


const DetailCharacter = () =>{
    const id = useParams();

    return(
        <div>
        <Navbar />
        
        {cards.map(card => (card.id == id.id?  <DetailCard key={card.id} {...card}/>:'') )}
        
        <Footer />
        </div>
    )
}
export default DetailCharacter