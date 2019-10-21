import React from "react";
import './business.css'

export default function Item ({item}) {
    return(
        <div className="bus_item">
            <img src={item.img} alt=""/>
            <p> {item.name} </p>
        </div>
    )
}