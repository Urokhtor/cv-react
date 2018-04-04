import React, {Component} from 'react';
import './Snow.scss';

const UPDATE_INTERVAL = 33;
const MAX_PARTICLES = 180;
const PARTICLE_BASE_SPEED = 2;
const PARTICLE_MAX_SIZE = 3;

/**
 * Simple snow effect generator component which runs in the background. Uses <a href="https://www.npmjs.com/package/react-snow-effect">react-snow-effect</a>
 * for inspiration.
 */
export default class Snow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            interval: null,
            context: null,
            particles: []
        };
    }

    componentDidMount() {
        const canvas = document.getElementsByClassName("snow-canvas");
        const context = canvas[0].getContext("2d");

        this.setState({
            interval: setInterval(() => this.loop(this), UPDATE_INTERVAL),
            context: context
        })
    }

    componentWillUnmount() {
        let context = this.state.context;
        context.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
        clearInterval(this.state.interval);
    }

    loop() {
        let livingParticles = Snow.update(this.state.context, this.state.particles);
        Snow.render(this.state.context, livingParticles);

        this.setState({
            particles: livingParticles
        })
    }

    static update(context, particles) {
        let canvas = context.canvas;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        if (particles.length < MAX_PARTICLES) {
            particles.push(Snow.emit(canvas.clientWidth, canvas.clientHeight))
        }

        particles.forEach(particle => {
            particle.x = particle.x + particle.speed.x;
            particle.y = particle.y + particle.speed.y;
        });

        return particles.filter(particle => !Snow.outsideViewport(particle, canvas.width, canvas.height));
    }

    static emit(canvasWidth, canvasHeight) {
        return {
            x: Math.random() * canvasWidth,
            y: -2,
            r: Math.random() * PARTICLE_MAX_SIZE,
            speed: {
                x: Math.random() * (PARTICLE_BASE_SPEED/2),
                y: Math.random() * PARTICLE_BASE_SPEED + 1
            }
        }
    }

    static outsideViewport(particle, w, h) {
        return particle.x < 0 || particle.y < 0 || particle.x > w || particle.y > h
    }

    static render(context, particles) {
        let canvas = context.canvas;
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        context.fillStyle = "rgba(255, 255, 255, 0.8)";
        context.beginPath();

        particles.forEach(particle => {
            context.moveTo(particle.x, particle.y);
            context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2, true);
        });

        context.fill();
    }

    render() {
        const snowStyles = {
            margin: 0,
            padding: 0,
            pointerEvents: 'none',
            position: 'absolute',
            zIndex: 1,
            width: '100vw',
            height: '100vh'
        };

        return (
            <canvas
                className={"snow-canvas"}
                style={snowStyles} />
        );
    }
}