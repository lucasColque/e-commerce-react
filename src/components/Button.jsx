import React from "react";
import { Link } from "react-router-dom";

const Button = ({url,texto}) =>{
    return(
        <>
            <button>
                <Link to={url}>
                    {texto}
                </Link>
            </button>
        </>
    )
}
export default Button