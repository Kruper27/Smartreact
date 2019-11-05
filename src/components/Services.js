import React, {Component} from 'react';
import Leading from "./leading/Leading";
import Professional from "./professionalOut/Professional";
import WebDev from "./webDev/WebDev";


export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <Leading />
                <Professional />
                <WebDev />
            </div>
        );
    }
}
