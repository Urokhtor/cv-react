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
            selected: this.homeRef,
            selectedClass: 'home'
        };
    }

    /**
     * This fast scroll is used when the viewport size changes to seamlessly move the viewport to its previous location.
     * It does not do much on desktop, but on mobile the viewport moved to a random position when the viewport changed
     * from portrait to landscape of the other way around. This routine just quickly sets the viewport back to where it
     * was and the user won't have to re-scroll.
     */
    fastScrollTo() {
        Scroll.toElementFast(`.${this.state.selectedClass}-page`);
    }

    componentDidMount() {
        window.addEventListener('resize', this.fastScrollTo.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.fastScrollTo.bind(this))
    }

    onClick(ref, view) {
        Scroll.toElement(`.${view}-page`);

        this.state.selected.current.classList.remove('selected');
        ref.current.classList.add('selected');

        this.setState({
            selected: ref,
            selectedClass: view
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