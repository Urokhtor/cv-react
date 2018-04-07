import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

export default class TextInput extends Component {

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
            <div className={"text-input spaced flex-vertical"}>
                <input
                    type="text"
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    placeholder={this.props.label}
                    value={this.state.value ? this.state.value : ''}/>
            </div>
        );
    }
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    label: PropTypes.string
};