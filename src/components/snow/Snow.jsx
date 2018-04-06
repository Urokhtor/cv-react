import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Snow.scss';
import SnowEmitter from "./SnowEmitter";

const UPDATE_INTERVAL = 33;
const MAX_PARTICLES = 180;
const PARTICLE_BASE_SPEED = 50;
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

    /**
     * <p>Runs the simulation loop over one timestep and handles things like emitting new particles and rendering them on the
     * screen.</p>
     *
     * <p>First the delta time is updated which is used to do time based calculations. Then the emitter is used to put
     * new particles in the system (if needed). Currently the emitter is time based, e.g. it emits new particles at a
     * fixed interval. Then after the emitting step, the simulation is updated using the delta time to move the particles.
     * At this point the particles outside viewport are culled out. Lastly the particles are rendered on screen and the
     * simulation's state is updated.</p>
     */
    loop() {
        let currentTime = Date.now();
        let newDelta = currentTime - this.state.lastTime;
        this.state.emitter.update(newDelta, this.state.particles, this.state.context.canvas.clientWidth);
        let livingParticles = Snow.update(this.state.context, this.state.particles, newDelta/1000);
        Snow.render(this.state.context, livingParticles);

        this.setState({
            particles: livingParticles,
            lastTime : currentTime
        })
    }

    /**
     * Runs the simulation over one timestep. First the canvas size is scaled to actual viewport's size. Then the simulation
     * is applied over all the particles in the system. After that the particles are filtered based on whether they are
     * still visible in the viewport, and only those inside it are returned. This way all the particles that have gone
     * outside of the viewport are automatically destroyed.
     *
     * @param context The canvas 2D context.
     * @param particles Particles in the simulation.
     * @param delta Delta time in seconds.
     * @returns {*} Culled list of particles that are still inside the viewport after simulation step has been performed.
     */
    static update(context, particles, delta) {
        let canvas = context.canvas;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        particles.forEach(particle => {
            particle.x = particle.x + particle.velocity.x * delta;
            particle.y = particle.y + particle.velocity.y * delta;
        });

        return particles.filter(particle => !Snow.outsideViewport(particle, canvas.width, canvas.height));
    }

    /**
     * Tests whether the given particle is outside given viewport where viewport origin is a 0,0 and <i>w</i> and <i>h</i>
     * denote the width and height of the viewport.
     *
     * @param particle Particle to test against.
     * @param w Width of the viewport.
     * @param h Height of the viewport.
     * @returns {boolean} Whether particle was outside the viewport.
     */
    static outsideViewport(particle, w, h) {
        return particle.x < 0 || particle.y < 0 || particle.x > w || particle.y > h
    }

    /**
     * Performs a simple rendering pass over the list of particles in the system. The particles are rendered as a round
     * filled arcs.
     *
     * @param context Canvas 2D context.
     * @param particles The particles to be rendered.
     */
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
            position: this.props.position
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