import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

export default class TextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            error: null
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
        this.setState({
            error: null
        });

        let failed = false;

        if (this.props.validator) {
            let validationResult = this.props.validator(this.state.value);

            if (validationResult !== undefined) {
                failed = true;
                this.setState({
                    error: validationResult
                });
            }
        }

        this.props.onChange({
            failed: failed,
            value: this.state.value
        });
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
                {this.props.label && <label className={"label"}>{this.props.label}</label>}
                {this.state.error && <label className={"error"}>{this.state.error}</label>}
            </div>
        );
    }
}

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    validator: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number
};

TextInput.defaultProps = {
    width: 300
};