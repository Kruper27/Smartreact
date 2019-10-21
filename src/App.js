import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/header";
import Leading from "./components/leading/leading";
import Professional from "./components/professionalOut/professional";
import Business from "./components/business/business";

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Leading />
            <Professional />
            <Business />
        </div>
    );
  }
}