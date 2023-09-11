import React from "react";
import { Link } from "react-router-dom";

const CardMain = ({ image, section, textTitle, textParagraph, collection, collection__content, collection__title, collection__text, collection__link, collection__cover }) => {
    return (
        <>
            <section className={collection}>
                <article className={collection__content}>
                    <h1 className={collection__title}>{textTitle}</h1>
                    <p className={collection__text}>{textParagraph}</p>
                    <Link className={collection__link} to={`./catalogo/${section}`}>VER COLECCIÓN</Link>
                </article>
                <picture className={collection__cover}>
                    <img src={image} alt="funkoPop" />
                </picture>
            </section>
        </>
    )
}
export default CardMain