import PropTypes from 'prop-types';

export default class SnowEmitter {

    constructor(props) {
        console.log(props);
        this.props = props;
        this.cumTime = 0;
    }

    update(delta, particles, viewportWidth) {
        this.cumTime += delta;

        if (this.cumTime < this.props.interval) {
            return;
        }

        if (particles.length > this.props.maxParticles) {
            return;
        }

        particles.push(this.emit(viewportWidth));
        this.cumTime -= this.props.interval;
    }

    emit(viewportWidth) {
        return {
            x: Math.random() * viewportWidth,
            y: 0,
            r: Math.random() * this.props.particleMaxSize,
            velocity: {
                x: Math.random() * (this.props.particleBaseSpeed/2),
                y: Math.random() * this.props.particleBaseSpeed + 1
            }
        }
    }
}

SnowEmitter.propTypes = {
    interval: PropTypes.number,
    maxParticles: PropTypes.number,
    particleBaseSpeed: PropTypes.number,
    particleMaxSize: PropTypes.number
};