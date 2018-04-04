import React, {Component} from 'react';
import './Navbar.scss';
import Scroll from "../platform/Scroll";

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 'home'
        }
    }

    onClick(ref) {
        Scroll.toElement(document.querySelector(`.${ref}-page`));

        this.refs[this.state.selected].classList.remove('selected');
        this.refs[ref].classList.add('selected');

        this.setState({
            selected: ref
        });
    }

    render() {
        return (
            <nav style={this.props.style} className={"navbar-container"}>
                <div className="navbar-spaced flex-end">
                    <div ref="home" onClick={this.onClick.bind(this, 'home')}>Home</div>
                    <div ref="about" onClick={this.onClick.bind(this, 'about')}>About</div>
                    <div ref="experience" onClick={this.onClick.bind(this, 'experience')}>Experience</div>
                    <div ref="contact" onClick={this.onClick.bind(this, 'contact')}>Contact</div>
                </div>
            </nav>
        )
    }
}