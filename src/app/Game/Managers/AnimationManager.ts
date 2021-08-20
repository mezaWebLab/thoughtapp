import { Scene } from "babylonjs";
import Configuration from "../Configuration";
import CameraManager from "./CameraManager";
import ObjectManager from "./ObjectManager";

/**
 * Animation manager class
 * Responsible for handling logic relevant to animations
 * @param {any} config - the global animation configuration
 * @param {Scene} scene - the babylon.js scene object
 * @param {ObjectManager} objectManager - the game's object manager
 */
class AnimationManager {
    config: any;
    scene: Scene;
    objectManager: ObjectManager;
    cameraManager: CameraManager;

    constructor(scene: Scene, objectManager: ObjectManager, cameraManager: CameraManager) {
        const config = new Configuration();
        this.config = config.animations;
        this.scene = scene;
        this.objectManager = objectManager;
        this.cameraManager = cameraManager;
    }

    /**
     * Main animation method that toggles core animations
     * @returns {void}
     */
    run(): void  {
        this.cameraManager.default.rotation.y += 0.0001;
        this.cameraManager.default.rotation.x += 0.0001;
        const objects = this.objectManager.getAll();
        objects.forEach(object => object.runAnimations());
    }   

    static get mainConfig(): any {
        const config = new Configuration();
        return config.animations;
    }
}

export default AnimationManager;