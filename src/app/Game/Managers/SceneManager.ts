import * as BB from 'babylonjs';
import Engine from '../Engine';

/**
 * Main Scene of Game (Contains Babylon.js scene)
 * @param {any} default - Code babylon.js scene
 */
class SceneManager {
    default: any;

    constructor(engine: Engine) {
        this.default = new BB.Scene(engine.core);
    }
}

export default SceneManager;