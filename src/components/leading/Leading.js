import React, { Component} from 'react'
import Emblem from "./Emblem";
import logo from '../../asserts/images/chat_icon.png'
import LeadingStyle from "./stylesForLeading/LeadingStyle";
import ContentStyle from "./stylesForLeading/ContentStyle";
import TitleStyle from "./stylesForLeading/TitleStyle";
import ItemsStyle from "./stylesForLeading/ItemsStyle";
import ChatIcon from "./stylesForLeading/ChatIcon";
import ChatIconEmblem from "./stylesForLeading/ChatIconEmblem";
import {Link} from "react-router-dom";



export default class Leading extends Component {

    state = {
        emblems:[
            { name:'favorites', Description:'86 + Skilled Developers', img:"favorites.png", key:1 },
            { name:'settings', Description:'Full-cycle support', img:"settings.png" , key:2},
            { name:'post', Description:'Daily reports', img:"post.png" , key:3}
        ]
    };



    renderEmblems() {
        return this.state.emblems.map(emblem => {
            return (
                <Emblem emblem = {emblem} key={emblem.key}/>
            )
        })
    }

    render() {
        return (
            <LeadingStyle>
                <ContentStyle>
                    <TitleStyle>
                        <h1> <b>Leading Web And Software Development Company </b> </h1>
                    </TitleStyle>
                    <ItemsStyle>
                        { this.renderEmblems()}
                    </ItemsStyle>
                    <ChatIcon>
                        <ChatIconEmblem>
                            <Link to="/"><img src={logo} alt=""/> </Link>
                        </ChatIconEmblem>
                    </ChatIcon>
                </ContentStyle>
            </LeadingStyle>
        )
    }
}
