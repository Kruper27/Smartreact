import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

export default class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="logo">
                    <Router>
                    <img src="../../asserts/images/logo.png" alt="" />

                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/" >About</Link></li>
                            <li className="selected"><Link to="/">Services</Link></li>
                            <li><Link to="/">Expertise</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/"> <img src="../../asserts/images/search_icon.png" alt=""/> </Link></li>
                            <li><Link to="/"> Eng <img src="../../asserts/images/right_arrow_copy_4.png" alt=""/> </Link></li>
                        </ul>
                    </Router>
                </div>
            </div>
        )
    }
}