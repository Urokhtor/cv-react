import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Snow.scss';
import SnowEmitter from "./SnowEmitter";

const UPDATE_INTERVAL = 33;
const MAX_PARTICLES = 180;
const PARTICLE_BASE_SPEED = 5;
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
            particles: [],
            lastTime: Date.now(),
            emitter: new SnowEmitter({
                interval: 200,
                maxParticles: this.props.maxParticles,
                particleBaseSpeed: this.props.particleBaseSpeed,
                particleMaxSize: this.props.particleMaxSize
            })
        };
    }

    componentDidMount() {
        const canvas = document.getElementsByClassName("snow-canvas");
        const context = canvas[0].getContext("2d");

        this.setState({
            interval: setInterval(() => this.loop(this), this.props.updateInterval),
            context: context
        })
    }

    componentWillUnmount() {
        let context = this.state.context;
        context.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
        clearInterval(this.state.interval);
    }

    loop() {
        let currentTime = Date.now();
        let newDelta = currentTime - this.state.lastTime;
        this.state.emitter.update(newDelta, this.state.particles, this.state.context.canvas.clientWidth);
        let livingParticles = Snow.update(this.props, this.state.context, this.state.particles, newDelta/100);
        Snow.render(this.state.context, livingParticles);

        this.setState({
            particles: livingParticles,
            lastTime : currentTime
        })
    }

    static update(props, context, particles, delta) {
        let canvas = context.canvas;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        particles.forEach(particle => {
            particle.x = particle.x + particle.velocity.x * delta;
            particle.y = particle.y + particle.velocity.y * delta;
        });

        return particles.filter(particle => !Snow.outsideViewport(particle, canvas.width, canvas.height));
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

        context.closePath();
        context.fill();
    }

    render() {
        const snowStyles = {
            margin: 0,
            padding: 0,
            pointerEvents: 'none',
            position: this.props.position,
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

Snow.propTypes = {
    position: PropTypes.string,
    updateInterval: PropTypes.number,
    maxParticles: PropTypes.number,
    particleBaseSpeed: PropTypes.number,
    particleMaxSize: PropTypes.number
};

Snow.defaultProps = {
    position: 'absolute',
    updateInterval: UPDATE_INTERVAL,
    maxParticles: MAX_PARTICLES,
    particleBaseSpeed: PARTICLE_BASE_SPEED,
    particleMaxSize: PARTICLE_MAX_SIZE
};