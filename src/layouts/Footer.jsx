import React from "react";
import ListNavbar from "../components/ListNavbar";
import logo from "../assets/images/multimedia/branding/isotype.svg";
import "../stylesheets/layouts/footer.css"
const Footer = () => {
    const styles={
        navbar__menu:"navbar__item",
        navbar__item:"navbar__item",
        navbar__link:"navbar__link"
    }
    const list = ["SHOP", "INGRESAR", "CONTACTO"];
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ListNavbar list={list} {...styles}/>

                <picture>
                    <img src={logo} alt="Logo FunkoPop" />
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
        </footer>
    )
}
export default Footer