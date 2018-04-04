import React, {Component} from 'react';
import './Navbar.scss';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav style={this.props.style} className={"navbar-container"}>
                <div className="navbar-spaced flex-end">
                    <div>About</div>
                    <div>Experience</div>
                    <div>Contact</div>
                </div>
            </nav>
        )
    }
}