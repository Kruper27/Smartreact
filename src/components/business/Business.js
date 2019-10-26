import React, {Component} from 'react'
import logo from '../../asserts/images/checked.png'
import Item from "./Item";

export default class Business extends Component {

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
            <div className="business">
                <div className="title">
                    <h2><b> Web Development Solutions For Any Business </b></h2>
                    <p>Develop more that 214 websites of any complexity during 15 years</p>
                </div>
                <div className="business_content">
                    {this.renderItem()}
                </div>
            </div>
        )
    }
}

