import React, { Component} from 'react'
import './leading.css'
import Emblem from "./Emblem";
import logo from '../../asserts/images/chat_icon.png'

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
            <div className="lead">
                <div className="leading">
                    <div className="leading_content">
                        <div className="tit">
                            <h1> <b>Leading Web And Software Development Company </b> </h1>
                        </div>

                        <div className='lead_items'>
                            { this.renderEmblems()}
                        </div>

                        <div className="lead_chat">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
