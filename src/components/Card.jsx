import React from "react";
import { Link } from "react-router-dom";
import "../../src/stylesheets/components/card.css";


const Card = ({ url,url2, subTitle, title, price, textPrice, id }) => {

    return (
        <article className="card-item">
            <Link className="card-item__link" to={`/detailCharacter/${id}`}>
                <picture className="card-item__cover">
                    <span className="card-item__tag">Nuevo</span>
                    <img className="card-item__img--front" src={url} alt="Funko Pop" />
                    <img className="card-item__img--back" src={url2} alt="Funko Pop box" />
                </picture>
                <div className="card-item__content">
                    <p className="card-item__licence">{subTitle}</p>
                    <h4 className="card-item__name">{title}</h4>
                    <p className="card-item__price">{price}</p>
                    <p className="card-item__promo">{textPrice}</p>
                </div>

            </Link>
        </article>
    )
}
export default Card