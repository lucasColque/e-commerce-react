import React from "react";
import Button from "./Button";


const Banner = () =>{
    const btn={
        url:"/catalogo",
        texto:"SHOP"
    }
    return(
/*Como fondo del div, la imagen del banner */
        <div>
            <h2>Nuevos ingresos</h2>
            <p> Descubrí el próximo Funko Pop de tu colección</p>
            <Button {...btn}/>
        </div>
    )
}
export default Banner