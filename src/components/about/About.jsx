import React, {Component} from 'react';
import './About.scss';

export default class About extends Component {

    render() {
        return (
            <div className={"about-page about-grid"}>
                <div className={"about-container"}>
                    <div className={"about-text flex-vertical"}>
                        <h1>About</h1>
                        <p>Full stack developer who writes code mainly in Java.</p>
                        <p>I have worked with <i>Spring Framework</i> and its various components for five years and use it like a Swiss army knife. Although
                            I like to work in the backend, frontend code is not foreign to me either.</p>
                        <p><i>Clean code</i> is becoming increasingly important for me as it not only makes code easier to
                            read and understand, but also increases its maintainability.</p>
                        <p>Racing in one form or another has been a life long passion to me and these days I'm a member of the
                            simracing team <i>Black Star Racing</i>. It is a fun hobby that demands diligent training and steely concentration.
                            Apart from that I like to study history, consume coffee and keep myself in shape with weightlifting and cycling.</p>
                        <p>This site itself was built as sort of an exercise because I felt like doing some UI coding with React.</p>
                    </div>
                </div>
                <div className={"about-container"}>
                    <div className={"about-skills flex-vertical"}>
                        <h1>Skills</h1>
                        <ul>
                            <li>Broad Java programming experience</li>
                            <li>Spring Framework</li>
                            <li>React & Angular</li>
                            <li>Docker</li>
                            <li>Puppet</li>
                            <li>Python</li>
                            <li>Many years of server Linux experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}