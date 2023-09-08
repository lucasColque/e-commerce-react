import React from "react";
import ListNavbar from "../components/ListNavbar"
import logo from "../assets/images/multimedia/branding/isotype.svg"
const Footer = () =>{
    const list = ["SHOP","INGRESAR","CONTACTO"];
    return(
        <footer>
            <ListNavbar list={list}/>
            <img src={logo} alt="Logo FunkoPop" />
        </footer>
    )
}
export default Footer