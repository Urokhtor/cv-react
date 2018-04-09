import React, {Component} from 'react';
import './Contact.scss';
import Snow from "../snow/Snow";
import TextInput from "../input/TextInput";
import TextArea from "../input/TextArea";
import RaisedButton from "../input/RaisedButton";

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            title: null,
            message: null
        }
    }

    emailChange(text) {
        this.setState({
            email: text
        });
    }

    titleChange(text) {
        this.setState({
            title: text
        });
    }

    messageChange(text) {
        this.setState({
            message: text
        });
    }

    onSubmit() {
        console.log("onsubmit");
        // TODO: now build the email and send it.

        this.setState({
            email: null,
            title: null,
            message: null
        });

        // TODO: show user acknowledgement that email was sent successfully.
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
                                    onChange={this.emailChange.bind(this)} />
                                <TextInput
                                    value={this.state.title}
                                    label={'Title'}
                                    onChange={this.titleChange.bind(this)} />
                            </div>
                            <div>
                                <TextArea
                                    value={this.state.message}
                                    label={'Message'}
                                    onChange={this.messageChange.bind(this)}
                                    width={400}
                                    height={200}/>
                            </div>
                        </div>
                        <div className={"flex-end"}>
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