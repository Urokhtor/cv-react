import React, {Component} from 'react';
import './Home.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"home-page home-container background-container flex-vertical"}>
                <h1>Jere Teittinen</h1>
                <p>Full stack developer and sim racer</p>
            </div>
        );
    }
}