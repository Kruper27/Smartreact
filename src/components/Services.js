import React, {Component} from 'react';
import Leading from "./leading/Leading";
import Professional from "./professionalOut/Professional";
import Business from "./business/Business";


export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <Leading />
                <Professional />
                <Business />
            </div>
        );
    }
}
