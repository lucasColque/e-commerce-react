import React from "react";

import Card from "./Card";
import cards from "../helper/funkopop"




const CardSection = () =>{

    return(
        <section>
            {
                cards.map(item => <Card key={item.id} {...item}/>)
            }
        </section>
    )
}
export default CardSection