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
            {name: "Home", key: 1},
            {name: "About", key: 2},
            {name: "Services", key: 3},
            {name: "Expertise", key: 4},
            {name: "Blog", key: 5},
            {name: "Contact", key: 6},
            {name: <img src={search} alt="" />, key: 7},
            {name: "Eng" + <img src={arrow} alt=""/>, key: 8}
        ]
    };

    // renderbar(){
    //     return this.state.menubar.map(item => {
    //         return (
    //             <LiStyles><Item item = {item} key={item.key}/></LiStyles>
    //         )
    //     })
    // }
    //
    // Item ({item}) {
    //     return(
    //         <LinkStyle to="/"> {item.name}</LinkStyle>
    //     )
    // }

    render(){
        return(
            <HeadStyle>
                <img src={logo} alt=""/>
                <UlStyle>
                    <LiStyles><LinkStyle to="/">Home</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/" >About</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/services">Services</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/">Expertise</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/">Blog</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/">Contact</LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/"> <img src={search} alt=""/> </LinkStyle></LiStyles>
                    <LiStyles><LinkStyle to="/"> Eng <img src={arrow} alt=""/> </LinkStyle></LiStyles>
                            {/*{this.renderbar()}*/}
                </UlStyle>
            </HeadStyle>
        )
    }
}