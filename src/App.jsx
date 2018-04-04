import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

export default class App extends Component {

    render() {
        return (
            <div className="grid-container">
                <Home
                    navbar={<Navbar style={{height: "5vh"}}/>}
                    style={{height: "95vh"}} />
                <Experience/>
                <Footer/>
            </div>
        );
    }
}