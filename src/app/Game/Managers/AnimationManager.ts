import { Scene } from "babylonjs";
import Configuration from "../Configuration";
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

    constructor(scene: Scene, objectManager: ObjectManager) {
        const config = new Configuration();
        this.config = config.animations;
        this.scene = scene;
        this.objectManager = objectManager;
    }

    /**
     * Main animation method that toggles core animations
     * @returns {void}
     */
    run(): void  {
        const objects = this.objectManager.getAll();
        objects.forEach(object => object.runAnimations());
    }   

    static get mainConfig(): any {
        const config = new Configuration();
        return config.animations;
    }
}

export default AnimationManager;