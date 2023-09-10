import React from "react";
import { Link } from "react-router-dom";

const Card = ({ url, subTitle, title, price, textPrice, id }) => {
    return (
        <article>
            <div>
                <picture>
                    <img src={url} alt="Funko Pop" />
                </picture>
                <div>NUEVO</div>
            </div>
            <div>
                <h4>{subTitle}</h4>
                <h3>{title}</h3>
                <p>{price}</p>
                <p>{textPrice}</p>
            </div>
            <Link to={`/detailCharacter/${id}`}>
                <button>VER MAS</button>
            </Link>
        </article>
    )
}
export default Card