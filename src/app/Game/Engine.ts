import * as BB from 'babylonjs';

/**
 * Core Engine of Game (Contains Babylon.js engine)
 * @param {any} core - Code babylon.js engine
 */
class Engine {
    core: any;

    constructor(canvas: HTMLCanvasElement) {
        this.core = new BB.Engine(canvas, true);
    }
}

export default Engine;