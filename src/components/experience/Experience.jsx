import React, {Component} from 'react';
import './Experience.scss';

export default class Experience extends Component {

    render() {
        return (
            <div className={"experience-page experience-container"}>
                <div>
                    <h1>Career</h1>
                    <h2>2009 - 2013 Studied electrical engineering at <a target="_blank" href="http://www.karelia.fi/en/" className="karelia">Karelia University of Applied Sciences</a></h2>
                    <ul><li>Industry automation and programming as side subjects</li></ul>
                    <h2>2013 May - <a target="_blank" href="https://fastroi.fi/en/" className="fastroi">Fastroi Oy</a></h2>
                    <ul><li>Software development, mainly back end</li>
                    <li>Implemented <a target="_blank" href="http://www.kanta.fi/en/" className="kanta">eRecipe & eArchive</a> integrations</li>
                    <li>DevOps</li>
                    <li>Internal deployment system</li>
                    </ul>
                </div>
            </div>
        );
    }
}