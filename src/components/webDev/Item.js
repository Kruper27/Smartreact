import React from "react";
import WebDevItem from "./stylesForWebDev/WebDevItem";
import WebDevItemP from "./stylesForWebDev/WebDevItemP";

export default function Item ({item}) {
    return(
        <WebDevItem>
            <img src={item.img} alt=""/>
            <WebDevItemP> {item.name} </WebDevItemP>
        </WebDevItem>
    )
}