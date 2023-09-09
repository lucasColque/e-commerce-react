import React from "react";
import ListNavbar from "../components/ListNavbar"
import logo from "../assets/images/multimedia/branding/isotype.svg"
const Footer = () =>{
    const list = ["SHOP","INGRESAR","CONTACTO"];
    return(
        <footer>
            <div>
            <ListNavbar list={list}/>
            <img src={logo} alt="Logo FunkoPop" />
            </div>
            <p>All rights reserved 2023 - Funkoshop &copy;</p>
        </footer>
    )
}
export default Footer