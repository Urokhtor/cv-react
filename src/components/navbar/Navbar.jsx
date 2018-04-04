import React, {Component} from 'react';
import './Navbar.scss';
import Scroll from "../platform/Scroll";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    onClick(element) {
        Scroll.toElement(document.querySelector(element));
    }

    render() {
        return (
            <nav style={this.props.style} className={"navbar-container"}>
                <div className="navbar-spaced flex-end">
                    <div onClick={() => this.onClick('.home-page')}>Home</div>
                    <div onClick={() => this.onClick('.about-page')}>About</div>
                    <div onClick={() => this.onClick('.experience-page')}>Experience</div>
                    <div onClick={() => this.onClick('.contact-page')}>Contact</div>
                </div>
            </nav>
        )
    }
}