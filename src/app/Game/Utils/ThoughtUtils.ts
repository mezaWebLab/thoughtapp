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

    /**
     * Generates random float to be used as X value. 
     * @returns {number}
     */
    getRandomX(): number {
        return this.getRandomMinMax(this.config.placement.min.x, this.config.placement.max.x);
    }

     /**
     * Generates random float to be used as Z value. 
     * @returns {number}
     */
    getRandomZ(): number {
        return this.getRandomMinMax(this.config.placement.min.z, this.config.placement.max.z);
    }

     /**
     * Generates random float to be used as Y value. 
     * @returns {number}
     */
    getRandomY(): number {
        return this.getRandomMinMax(this.config.placement.min.y, this.config.placement.max.y);
    }

     /**
     * Generates random float with specified min and max
     * @returns {number}
     */
    getRandomMinMax(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}

export default ThoughtUtils;