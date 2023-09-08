import React from "react";

import Card from "./Card";
import cards from "../helper/funkopop"




const CardSection = () =>{

    return(
        <section>
            {
                cards.map(item => <Card key={item.id} {...item} button={true}/>)
            }
        </section>
    )
}
export default CardSection