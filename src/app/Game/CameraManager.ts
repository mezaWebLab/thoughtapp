import * as BB from 'babylonjs';
import SceneManager from './SceneManager';
import Configuration from './Configuration';

/**
 * Main Scene of Game (Contains Babylon.js scene)
 * @param {any} core - Code babylon.js scene
 */
class CameraManager {
    config: Configuration;
    default: BB.UniversalCamera;

    constructor(sceneManager: SceneManager) {
        this.config = new Configuration();
        this.default = new BB.UniversalCamera(
            this.config.camera.default.key, 
            new BB.Vector3(this.config.camera.default.initialPosition.x, this.config.camera.default.initialPosition.y, this.config.camera.default.initialPosition.z), 
            sceneManager.default
        );
    }
}

export default CameraManager;