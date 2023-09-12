import React, { useState } from "react";
import ListNavbar from "../components/ListNavbar";
import logo from "../assets/images/multimedia/branding/logo.svg"
import { Link } from "react-router-dom";
import "../../src/stylesheets/layouts/navbar.css";
const Navbar = () => {

    let sections = ["Home", "Catalogo","Registro","Login"];   
    const [list, setList] = useState(sections);
    const styles ={
        navbar__menu:"navbar__menu",
        navbar__item:"navbar__item",
        navbar__link:"navbar__link"
    }
    return (
        <header>
            <nav className="navbar container">
                <picture className="navbar__logo">
                    <Link to="/">
                    <img src={logo} alt="Logo funkoShop" />
                    </Link>
                </picture>
                <ListNavbar list={list} {...styles}/>
            </nav>
        </header>
    )
}
export default Navbar