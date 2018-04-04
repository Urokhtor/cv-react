import React, {Component} from 'react';
import './Home.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"home-page background-container"}>
                {this.props.navbar}
                <div style={this.props.style} className={"home-container"}>
                    Home
                </div>
            </div>
        );
    }
}