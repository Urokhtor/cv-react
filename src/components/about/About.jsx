import React, {Component} from 'react';
import './About.scss';

export default class About extends Component {

    render() {
        return (
            <div className={"about-page about-grid"}>
                <div className={"about-container"}>
                    <div className={"flex-vertical"}>
                        <h1>Skills</h1>
                        <p>- Broad Java programming experience</p>
                        <p>- Spring Framework</p>
                        <p>- React & Angular</p>
                        <p>- Docker</p>
                        <p>- Puppet</p>
                        <p>- Python</p>
                        <p>- Many years of server Linux experience</p>
                    </div>
                </div>
                <div className={"about-container flex-vertical"}>
                    <div className={"flex-vertical"}>
                        <h1>Personal info and hobbies</h1>
                        <h2>I am [replace-me] years old, live in Joensuu and have a good sense of humour</h2>
                        <h2>Simracing</h2>
                        <p>- Member of <a target="_blank" href="replace-me" className="about-blackstar">Black
                            Star Racing</a></p>
                        <p>- Lots and lots of iRacing</p>
                        <h2 className="text-break">Coding</h2>
                        <p>- Always eager to learn something new</p>
                        <p>- Interested in horizontal scaling and distributed systems</p>
                        <p>- Good testing is important</p>
                        <h2 className="text-break">Exercising</h2>
                        <p>- Weightlifting</p>
                        <p>- Cycling</p>
                        <h2 className="text-break">3D printing</h2>
                        <h2 className="text-break">Coffee</h2>
                    </div>
                </div>
            </div>
        );
    }
}