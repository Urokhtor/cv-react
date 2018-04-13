import React, {Component} from 'react';
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
            messagseError: false
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
            return;
        }

        if (this.state.email === null || this.state.message === null) {
            return;
        }

        fetch('/api/v1/email/send', {
            method: 'post',
            body: JSON.stringify({
                from: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        })
            .then(response => {
                console.log(response);
                if (response.status !== 200) {
                    // TODO: show user error message
                    this.setState({
                        responseMessage: response.statusText
                    });
                    return;
                }

                this.setState({
                    email: null,
                    subject: null,
                    message: null,
                    responseMessage: "OK"
                });

                // TODO: show user acknowledgement that email was sent successfully.
            })
            .catch(error => {
                // TODO: show user error message
                this.setState({
                    responseMessage: JSON.stringify(error)
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
                        <div><i>Does not work yet...</i></div>
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
                                        if (input.length < 6) {
                                            return "Message is too short";
                                        }
                                    }}
                                    width={400}
                                    height={200}/>
                            </div>
                        </div>
                        <div className={"flex-end"}>
                            <span>{this.state.responseMessage}</span>
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