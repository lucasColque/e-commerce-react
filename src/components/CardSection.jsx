import React from "react";
import Card from "./Card";
import cards from "../helper/funkopop"



const CardSection = ({name}) => {
    console.log(name);
    return (
        <>
            <aside>
                
            </aside>
            <section className="card-items">
                {
                    cards.map(item => name == item.subTitle? <Card key={item.id} {...item}/>:name=== undefined? <Card key={item.id} {...item}/>:'')
                }
            </section>
        </>
    )
}
export default CardSection