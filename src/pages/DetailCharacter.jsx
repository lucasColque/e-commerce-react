import React from "react";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import cards from "../helper/funkopop";
import "../../src/stylesheets/pages/detailCharacter.css";

const DetailCharacter = () =>{
    const id = useParams();
    

    return(
        <>
        {cards.map(card => (card.id == id.id?  <DetailCard key={card.id} {...card}/>:'') )}
        
        </>
    )
}
export default DetailCharacter