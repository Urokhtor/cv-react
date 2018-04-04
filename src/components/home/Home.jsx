import React, {Component} from 'react';
import './Home.scss';

export default class Home extends Component {

    render() {
        return (
            <div className={"background-container"}>
                {this.props.navbar}
                <div className={"home-container"}>
                    Home
                </div>
            </div>
        );
    }
}