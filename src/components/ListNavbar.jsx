import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListNavbar = ({ list, navbar__menu, navbar__item, navbar__link }) => {
    return (
        <ul className={navbar__menu}>
            {
                list.map(item =>
                    <li className={navbar__item} key={item.toUpperCase()}><Link className={navbar__link} to={item == list[0] ? '/catalogo' : `/${item.toLowerCase()}`}>{item}</Link></li>
                )
            }
        </ul>
    )
}
export default ListNavbar