import React from "react";
import imageSection1 from "../assets/images/multimedia/star-wars/baby-yoda-1.webp";
import imageSection2 from "../assets/images/multimedia/pokemon/vulpix-1.webp"
import imageSection3 from "../assets/images/multimedia/harry-potter/snape-patronus-1.webp"
import CardMain from "./CardMain";
import "../../src/stylesheets/components/main.css";


const Main = () =>{
    const cards=[
        {image:imageSection1, section:"STAR WARS", textTitle: "STAR WARS & THE MANDALORIAN", textParagraph: "Disfruta de una saga que sigue agregando personajes a su colección."},
        {image:imageSection2, section:"POKEMON", textTitle:"POKEMON INDIGO", textParagraph:"Atrapa todos los que puedas y disfruta de una colección llena de amigos."},
        {image:imageSection3, section:"HARRY POTTER", textTitle: "HARRY POTTER", textParagraph: "Revive los recuerdos de una saga llena de magia y encanto."}
    ]
    const styles={
        collection:"collection container",
        collection__content:"collection__content",
        collection__title:"collection__title",
        collection__text:"collection__text",
        collection__link:"collection__link",
        collection__cover:"collection__cover"        
    }
    return(
        <main className="main-container">
            {
                cards.map(card => <CardMain {...styles} key={card.textTitle.toLowerCase()} {...card}/>)
            }
        </main>
    )
}
export default Main