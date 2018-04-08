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

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            };
        }

        return null;
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onBlur() {
        this.props.onChange(this.state.value);
    }

    render () {
        return (
            <div className={"text-input flex-vertical"}>
                <input
                    type="text"
                    style={{width: this.props.width}}
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.value ? this.state.value : ''}
                    required/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number
};

TextInput.defaultProps = {
    width: 300
};