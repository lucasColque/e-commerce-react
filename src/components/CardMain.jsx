import React from "react";
import { Link } from "react-router-dom";

const CardMain = ({image, textTitle, textParagraph }) =>{
    return(
        <>
        <section>
            <div>
                <h1>{textTitle}</h1>
                <p>{textParagraph}</p>
                <button><Link to="/catalogo">VER COLECCIÓN</Link></button>
            </div>
            <img src={image} alt="funkoPop" />
        </section>
        </>
    )
}
export default CardMain