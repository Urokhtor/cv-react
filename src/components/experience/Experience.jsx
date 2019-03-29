import React, {Component} from 'react';
import './Experience.scss';

export default class Experience extends Component {

    render() {
        return (
            <div className={"experience-page experience-container"}>
                <div className={"experience-card flex-horizontal"}>
                    <div>
                        <svg>
                            <rect x="0.88em" y="0.6em" height="24em"/>
                            <circle cx="1em" cy="0.6em"/>
                            <circle cx="1em" cy="6.2em"/>
                            <circle cx="1em" cy="15.2em"/>
                            <circle cx="1em" cy="20.9em"/>
                        </svg>
                    </div>
                    <div className={"experience-content"}>
                        <h1>Experience</h1>
                        <h2>2009 - 2013 <br/> Studied electrical engineering at <a target="_blank" href="http://www.karelia.fi/en/" className="karelia">Karelia University of Applied Sciences</a></h2>
                        <ul><li>Industry automation and programming as side subjects</li></ul>
                        <h2>2013 May - 2018 October<br/> <a target="_blank" href="https://fastroi.fi/en/" className="fastroi">Fastroi Oy</a></h2>
                        <ul>
                            <li>Software development, mainly back end</li>
                            <li>Implemented <a target="_blank" href="http://www.kanta.fi/en/" className="kanta">eRecipe & eArchive</a> integrations</li>
                            <li>DevOps</li>
                            <li>Internal deployment system</li>
                        </ul>
                        <h2>2018 October - 2019 March<br/> <a target="_blank" href="https://fastroi.fi/en/" className="fastroi">Fastroi Oy</a></h2>
                        <ul>
                            <li>Software Architect</li>
                        </ul>
                        <h2>2019 March - <br/> <a target="_blank" href="https://www.abloy.fi/" className="abloy">Abloy Oy</a></h2>
                        <ul>
                            <li>Software Specialist</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}