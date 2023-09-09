import React, { useState } from "react";


const DetailCard = ({url, subTitle, title, price, description, code}) =>{
    const [count, setCount] = useState(0);
    const handleClickIncrement = () =>{
        setCount(count + 1)
    }
    const handleClickDecrement = () =>{
        if(count == 0){
            setCount(0)
        }else{
            setCount(count -1)
        }
    }
    return(
        <div>
            
            <div>
                <img src={url} alt="Funko Pop" />
            </div>
            <div>
                <h4>{subTitle}</h4>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>Código: {code}</p>
            </div>
            <div>
                <p>{count}</p>
                <button onClick={handleClickIncrement}>+</button>
                <button onClick={handleClickDecrement}>-</button>
                <p>Agregar al Carrito</p>
            </div>

        </div>
    )
}
export default DetailCard