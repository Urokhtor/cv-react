import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './RaisedButton.scss';

export default class RaisedButton extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        );
    }
}

RaisedButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};