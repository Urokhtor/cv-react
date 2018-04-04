import React, {Component} from 'react';
import './Contact.scss';
import Snow from "../snow/Snow";

export default class Contact extends Component {

    render() {
        return (
            <div>
                <Snow/>
                <div className={"contact-container"}>Contact</div>
            </div>
        );
    }
}