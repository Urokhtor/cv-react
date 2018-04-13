import React, {Component} from 'react';
import {MorphIcon} from 'react-svg-buttons';
import './Contact.scss';
import Snow from "../snow/Snow";
import TextInput from "../input/TextInput";
import TextArea from "../input/TextArea";
import RaisedButton from "../input/RaisedButton";

const REGEX_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            emailError: false,
            subject: null,
            message: null,
            messageError: false,
            responseSuccess: false,
            responseError: null
        }
    }

    emailChange(change) {
        this.setState({
            email: change.value,
            emailError: change.failed
        });
    }

    titleChange(change) {
        this.setState({
            subject: change.value
        });
    }

    messageChange(change) {
        this.setState({
            message: change.value,
            messageError: change.failed
        });
    }

    onSubmit() {
        if (this.state.emailError || this.state.messageError) {
            this.setState({
                responseSuccess: false,
                responseError: "There are validation failures"
            });
            return;
        }

        if (this.state.email === null || this.state.message === null) {
            this.setState({
                responseSuccess: false,
                responseError: "Email address or message are empty"
            });
            return;
        }

        fetch('/cv/api/v1/email/send', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    this.setState({
                        responseSuccess: false,
                        responseError: response.statusText
                    });
                    return;
                }

                this.setState({
                    email: null,
                    subject: null,
                    message: null,
                    responseSuccess: true,
                    responseError: null
                });
            })
            .catch(error => {
                this.setState({
                    responseSuccess: false,
                    responseError: JSON.stringify(error)
                });
            });
    }

    render() {
        return (
            <div>
                <Snow/>
                <div className={"contact-page contact-container flex-vertical"}>
                    <div className={"card"} style={{zIndex: 2}}>
                        <div>Contact</div>
                        <div className={"flex-horizontal"}>
                            <div className={"flex-vertical"}>
                                <TextInput
                                    value={this.state.email}
                                    label={'Email'}
                                    onChange={this.emailChange.bind(this)}
                                    validator={input => {
                                        if (!REGEX_EMAIL.test(input)) {
                                            return "Invalid email address";
                                        }
                                    }} />
                                <TextInput
                                    value={this.state.subject}
                                    label={'Title'}
                                    onChange={this.titleChange.bind(this)} />
                            </div>
                            <div>
                                <TextArea
                                    value={this.state.message}
                                    label={'Message'}
                                    onChange={this.messageChange.bind(this)}
                                    validator={input => {
                                        if (!input || input.length < 6) {
                                            return "Message is too short";
                                        }
                                    }}
                                    width={400}
                                    height={200}/>
                            </div>
                        </div>
                        <div className={"flex-end"}>
                            {this.state.responseSuccess &&
                            <div className={"flex-center contact-padded"}>
                                <MorphIcon
                                    type="check"
                                    size={20}
                                    color="#4CAF50"/>
                            </div>}
                            {this.state.responseError &&
                            <div className={"flex-center contact-padded"}>
                                <span className={"contact-padded contact-error-text"}>{this.state.responseError}</span>
                                <MorphIcon
                                    type="cross"
                                    size={20}
                                    color="#F44336"/>
                            </div>}
                            <RaisedButton
                                text={"Send"}
                                onClick={this.onSubmit.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}