import React, { useState } from "react";
import {Link} from "react-router-dom";
    const ListNavbar = ({list}) =>{
        return(
                <ul>
                    {
                        list.map(item =>
                        <li key={item.toUpperCase()}><Link to={item == list[0]?'/':`/${item.toLowerCase()}`}>{item}</Link></li>
                        )
                    }
                </ul>
        )
    }
    export default ListNavbar