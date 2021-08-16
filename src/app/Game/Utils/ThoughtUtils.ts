import Configuration from "../Configuration";

/**
 * Stores various helper functions relevant to thought management
 * @param {any} config - the global thought configuration
 */
class ThoughtUtils {
    config: any;

    constructor() {
        const config = new Configuration();
        this.config = config.thoughts;
    }

    getRandomX(): number {
        return this.getRandomMinMax(this.config.placement.min.x, this.config.placement.max.x);
    }

    getRandomZ(): number {
        return this.getRandomMinMax(this.config.placement.min.z, this.config.placement.max.z);
    }

    getRandomY(): number {
        return this.getRandomMinMax(this.config.placement.min.y, this.config.placement.max.y);
    }

    getRandomMinMax(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}

export default ThoughtUtils;