import React from "react";
import Button from "./Button";
import "../../src/stylesheets/components/banner.css";

const Banner = () => {
    const btn = {
        url: "/catalogo",
        texto: "SHOP"
    }
    const styles={
        hero__link:"hero__link"
    }
    return (
        /*Como fondo del div, la imagen del banner */
        <section className="hero">
            <article className="hero__content container">
                <h3 className="hero__title">Nuevos ingresos</h3>
                <p className="hero__text"> Descubrí el próximo Funko Pop de tu colección</p>
                <Button  {...btn} {...styles} />
            </article>
        </section>
    )
}
export default Banner