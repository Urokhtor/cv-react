import React, {Component} from 'react';
import './Contact.scss';
import Snow from "../snow/Snow";

export default class Contact extends Component {

    render() {
        return (
            <div>
                <Snow/>
                <div className={"contact-page contact-container flex-vertical"}>
                    <div>Contact</div>
                    <div><i>Under construction...</i></div>
                </div>
            </div>
        );
    }
}