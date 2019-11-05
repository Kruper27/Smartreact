import React, {Component} from 'react'
import logo from '../../asserts/images/checked.png'
import Item from "./Item";
import Title from "../ImportantStyles/Title/Title";
import TitleH2 from "../ImportantStyles/Title/TitleH2";
import TitleP from "../ImportantStyles/Title/TitleP";
import WebDevelopStyle from "./stylesForWebDev/WebDevelopStyle";
import WebDevContent from "./stylesForWebDev/WebDevContent";

export default class WebDev extends Component {

    state ={
        itemsWeb:[
            {name :"Promo Site", img:logo, key:1},
            {name :"Langing Pages", img:logo, key:2},
            {name :"E-Commerce", img:logo, key:3},
            {name :"Corporate Site", img:logo, key:4},
            {name :"Online Catalog", img:logo, key:5},
            {name :"Online Store", img:logo, key:6}
        ]
    };

    renderItem() {
        return this.state.itemsWeb.map(item => {
            return (
                <Item item = {item} key={item.key}/>
            )
        })
    }

    render(){
        return(
            <WebDevelopStyle>
                <Title>
                    <TitleH2><b> Web Development Solutions For Any Business </b></TitleH2>
                    <TitleP>Develop more that 214 websites of any complexity during 15 years</TitleP>
                </Title>
                <WebDevContent>
                    {this.renderItem()}
                </WebDevContent>
            </WebDevelopStyle>
        )
    }
}

