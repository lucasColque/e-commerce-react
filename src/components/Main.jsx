import React from "react";
import imageSection1 from "../assets/images/multimedia/star-wars/baby-yoda-1.webp";
import imageSection2 from "../assets/images/multimedia/pokemon/vulpix-1.webp"
import imageSection3 from "../assets/images/multimedia/harry-potter/snape-patronus-1.webp"
import CardMain from "./CardMain";
import Banner from "../components/Banner";
const Main = () =>{
    const cards=[
        {image:imageSection1, textTitle: "STAR WARS & THE MANDALORIAN", textParagraph: "Disfruta de una saga que sigue agregando personajes a su colección."},
        {image:imageSection2, textTitle:"POKEMON INDIGO", textParagraph:"Atrapa todos los que puedas y disfruta de una colección llena de amigos."},
        {image:imageSection3, textTitle: "HARRY POTTER", textParagraph: "Revive los recuerdos de una saga llena de magia y encanto."}
    ]
    return(
        <main>
            <Banner />
            {
                cards.map(card => <CardMain key={card.textTitle.toLowerCase()} {...card}/>)
            }
        </main>
    )
}
export default Main