import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

const DEFAULT_WIDTH = 250;
const DEFAULT_HEIGHT = 70;

export default class TextArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onBlur() {
        this.props.onChange(this.props.value);
    }

    render () {
        return (
            <div className={"text-area spaced flex-vertical"}>
                <textarea
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.value ? this.state.value : ''}
                    required/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

TextArea.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
};

TextArea.defaultProps = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
};