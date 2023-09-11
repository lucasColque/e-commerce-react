import React from "react";
import { Link } from "react-router-dom";

const Button = ({url,texto, hero__link, functionHandle}) =>{
    return(
        <>
                <Link className={hero__link} to={url} onClick={functionHandle}>
                    {texto}
                </Link>
        </>
    )
}
export default Button