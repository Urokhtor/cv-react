import React, {Component} from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="menu">
                    <div>About</div>
                    <div>Experience</div>
                    <div>Contact</div>
                </div>
            </nav>
        )
    }
}