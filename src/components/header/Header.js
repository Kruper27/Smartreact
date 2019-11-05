import React, {Component} from 'react'
// import {
//     // Switch,
//     // Route,
//     Link
// } from "react-router-dom";
import logo from "../../asserts/images/logo.png"
import search from "../../asserts/images/search_icon.png"
import arrow from "../../asserts/images/right_arrow_copy_4.png"
import HeadStyle from "./stylesForHeader/HeadStyle";
import UlStyle from "./stylesForHeader/UlStyle";
import LiStyles from "./stylesForHeader/LiStyles";
import LinkStyle from "./stylesForHeader/LinkStyle";


export default class Header extends Component{

    state = {
        menubar:[
            {name: "Home", to:"/", key: 1},
            {name: "About", to:"/", key: 2},
            {name: "Services", to:"/services", key: 3},
            {name: "Expertise", to:"/", key: 4},
            {name: "Blog", to:"/", key: 5},
            {name: "Contact", to:"/", key: 6},
            {name: <img src={search} alt="" />, to:"/", key: 7},
            {name: "Eng" + <img src={arrow} alt=""/>, to:"/", key: 8}
        ]
    };

    renderBar(){
        return this.state.menubar.map(item => {
            return (
                <LiStyles><LinkStyle to={item.to}> {item.name} </LinkStyle></LiStyles>
            )
        })
    }


    render(){
        return(
            <HeadStyle>
                <img src={logo} alt=""/>
                <UlStyle>
                    {/*<LiStyles><LinkStyle to="/">Home</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/" >About</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/services">Services</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/">Expertise</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/">Blog</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/">Contact</LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/"> <img src={search} alt=""/> </LinkStyle></LiStyles>*/}
                    {/*<LiStyles><LinkStyle to="/"> Eng <img src={arrow} alt=""/> </LinkStyle></LiStyles>*/}
                    {this.renderBar()}
                </UlStyle>
            </HeadStyle>
        )
    }
}