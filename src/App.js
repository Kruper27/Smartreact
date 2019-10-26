import React from "react";

import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "../src/components/Home";
import Header from "./components/header/Header";
import Services from "./components/Services";


export default function App() {
    return(
        <div>
            <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Services}/>
        </Switch>
        </div>
    )
}