import React, {Component} from 'react';
import './Navbar.scss';
import Scroll from "../platform/Scroll";

export default class Navbar extends Component {

    constructor(props) {
        super(props);

        this.homeRef = React.createRef();
        this.aboutRef = React.createRef();
        this.experienceRef = React.createRef();
        this.contactRef = React.createRef();

        this.state = {
            selected: this.homeRef
        };
    }

    onClick(ref, view) {
        Scroll.toElement(document.querySelector(`.${view}-page`));

        this.state.selected.current.classList.remove('selected');
        ref.current.classList.add('selected');

        this.setState({
            selected: ref
        });
    }

    render() {
        return (
            <nav style={this.props.style} className={"navbar-container"}>
                <div className="navbar-spaced flex-end">
                    <div ref={this.homeRef} key={'home'} onClick={this.onClick.bind(this, this.homeRef, 'home')}>Home</div>
                    <div ref={this.aboutRef} onClick={this.onClick.bind(this, this.aboutRef, 'about')}>About</div>
                    <div ref={this.experienceRef} onClick={this.onClick.bind(this, this.experienceRef, 'experience')}>Experience</div>
                    <div ref={this.contactRef} onClick={this.onClick.bind(this, this.contactRef, 'contact')}>Contact</div>
                </div>
            </nav>
        )
    }
}