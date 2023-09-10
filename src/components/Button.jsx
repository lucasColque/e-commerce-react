import React from "react";
import { Link } from "react-router-dom";

const Button = ({url,texto, hero__link}) =>{
    return(
        <>
                <Link className={hero__link} to={url}>
                    {texto}
                </Link>
        </>
    )
}
export default Button