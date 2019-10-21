import React from "react";

export default function Emblem ({emblem}) {
    return(
        <div className="lead_block">
            <img src={emblem.img} alt={emblem.name}/>
            <p> {emblem.Description} </p>
        </div>
    )
}