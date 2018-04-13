import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

const DEFAULT_WIDTH = 250;
const DEFAULT_HEIGHT = 70;

export default class TextArea extends Component {

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
            <div className={"text-area flex-vertical"}>
                <textarea
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}
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

TextArea.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    validator: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
};

TextArea.defaultProps = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
};