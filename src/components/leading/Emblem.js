import React from "react";
import BlockStyles from "./stylesForLeading/BlockStyles";
import PForBlockStyle from "./stylesForLeading/PForBlockStyle";

export default function Emblem ({emblem}) {
    return(
        <BlockStyles>
            <img src={emblem.img} alt={emblem.name}/>
            <PForBlockStyle> {emblem.Description} </PForBlockStyle>
        </BlockStyles>
    )
}