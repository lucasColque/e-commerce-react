import React, { useEffect, useState } from "react";
import "../stylesheets/pages/detailCharacter.css";

const DetailCard = ({ url, url2, subTitle, title, price, description, code, stock }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [count, setCount] = useState(0);

    const handleClickIncrement = () => {
        if(count == stock){
            setCount(stock);
        }else{
            setCount(count + 1)
        }
    }

    const handleClickDecrement = () => {
        if (count == 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }

    const handleConstructor = () =>{
        if(count === 0){
            alert(`No agregaste funko. \n Sitio en construcción.`)
        }else{
            alert(`Agregaste ${count} funkos. \n Sitio en construcción.`);
        }
    }
    return (
        <section className="detalles-card container">
            <picture className="detalles-card__cover">
                <img src={url} className="detalles__img--front" alt="Funko Pop" />
                <img src={url2} className="detalles__img--back" alt="Funko Pop Box" />
            </picture>
            <article className="detalles-card__content">
                <h4 className="detalles-card__subtitle">{subTitle}</h4>
                <h3 className="detalles-card__title">{title}</h3>
                <p className="detalles-card__description">{description}</p>
                <p className="detalles-card__price">{price}</p>
                <p className="detalles-card__code">Código: {code}</p>
                {stock==0?<p className="detalles-card__stockNull">No hay Stock</p>:stock == 1?<p className="detalles-card__stockLast">Ultimo disponible!</p>:<p className="detalles-card__stock">Unidades: {stock}</p> }
                
                <div className="detalles-count">
                    <p className="detalles-count__unidad">{count}</p>
                    <div className="detalles-button">
                        <button className="detalles-button__button" onClick={handleClickIncrement}>+</button>
                        <button className="detalles-button__button" onClick={handleClickDecrement}>-</button>
                    </div>
                    <button className="detalles-count__compra" onClick={handleConstructor}>Agregar al Carrito</button>
                </div>
            </article>

        </section>
    )
}
export default DetailCard