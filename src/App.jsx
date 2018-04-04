import React, {Component} from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default class App extends Component {

    render() {
        return (
            <div className="grid-container">
                <Home
                    navbar={<Navbar style={{height: "5vh"}}/>}
                    style={{height: "95vh"}} />
                <About/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}