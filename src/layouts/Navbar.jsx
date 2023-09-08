import React, { useState } from "react";
import ListNavbar from "../components/ListNavbar";
import logo from "../assets/images/multimedia/branding/logo.svg"

const Navbar = () => {

    let sections = ["Home", "Catalogo","Registro","Login"];   
    const [list, setList] = useState(sections);
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="Logo funkoShop" />
                </div>
                <ListNavbar list={list} />
            </nav>
        </header>
    )
}
export default Navbar