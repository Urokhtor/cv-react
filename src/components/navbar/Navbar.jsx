import React, {Component} from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

    render() {
        return (
            <nav className={"navbar-container"}>
                <div className="navbar-spaced flex-end">
                    <div>About</div>
                    <div>Experience</div>
                    <div>Contact</div>
                </div>
            </nav>
        )
    }
}