import React from "react";
import { Link } from "react-router-dom";

const CardMain = ({ image, textTitle, textParagraph }) => {
    return (
        <>
            <section>
                <article>
                    <h1>{textTitle}</h1>
                    <p>{textParagraph}</p>
                    <button><Link to="/catalogo">VER COLECCIÓN</Link></button>
                </article>
                <picture>
                    <img src={image} alt="funkoPop" />
                </picture>
            </section>
        </>
    )
}
export default CardMain