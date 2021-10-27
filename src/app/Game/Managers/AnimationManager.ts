import { Scene, Animation, Vector3, Space } from "babylonjs";
import Configuration from "../Configuration";
import CameraManager from "./CameraManager";
import ObjectManager from "./ObjectManager";
import ThoughtManager from "./ThoughtManager";
import Settings from "../Interfaces/Settings";

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
    thoughtManager: ThoughtManager;
    settings: Settings;

    constructor(
        scene: Scene, 
        objectManager: ObjectManager, 
        cameraManager: CameraManager, 
        thoughtManager: ThoughtManager, 
        settings: Settings) {
            
        const config = new Configuration();
        this.config = config.animations;
        this.scene = scene;
        this.objectManager = objectManager;
        this.cameraManager = cameraManager;
        this.thoughtManager = thoughtManager;
        this.settings = settings;
    }

    /**
     * Main animation method that toggles core animations
     * @returns {void}
     */
    runCoreAnimations(): void  {
        const objects = this.objectManager.getAll();
        objects.forEach(object => object.runAnimations());
    }   

    runAnimation(animationKey: string, data: any): void {
        switch (animationKey) {
            case "move-thought-to-camera":
                const thought = data.thought,
                    pivot = this.objectManager.getObjectByKey(data.thought.pivotKey),
                    quaternionX = new Animation("quaternionX", "rotationQuaternion.x", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT),
                    quaternionZ = new Animation("quaternionZ", "rotationQuaternion.z", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT),
                    quaternionY = new Animation("quaternionY", "rotationQuaternion.y", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT),
                    thoughtPositionX = new Animation("postionX", "position.x", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT),
                    thoughtPositionZ = new Animation("postionZ", "position.z", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT),
                    thoughtPositionY = new Animation("postionY", "position.y", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);

                thought.onSelect();

                pivot.onSelect();

                quaternionX.setKeys([
                    {
                        frame: 0,
                        value: pivot.mesh.rotationQuaternion.x
                    },
                    {
                        frame: 100,
                        value: 0
                    }
                ]);

                quaternionZ.setKeys([
                    {
                        frame: 0,
                        value: pivot.mesh.rotationQuaternion.z
                    },
                    {
                        frame: 100,
                        value: 0
                    }
                ]);

                quaternionY.setKeys([
                    {
                        frame: 0,
                        value: pivot.mesh.rotationQuaternion.y
                    },
                    {
                        frame: 100,
                        value: 0
                    }
                ]);

                thoughtPositionX.setKeys([
                    {
                        frame: 0,
                        value: thought.mesh.position.x
                    },
                    {
                        frame: 120,
                        value: 0
                    }
                ]);

                thoughtPositionZ.setKeys([
                    {
                        frame: 0,
                        value: thought.mesh.position.z
                    },
                    {
                        frame: 120,
                        value: 0
                    }
                ]);

                thoughtPositionY.setKeys([
                    {
                        frame: 0,
                        value: thought.mesh.position.y
                    },
                    {
                        frame: 120,
                        value: 0
                    }
                ]);

                pivot.mesh.animations = [quaternionX, quaternionZ, quaternionY];
                thought.mesh.animations = [thoughtPositionX, thoughtPositionZ, thoughtPositionY];
                this.scene.beginAnimation(thought.mesh, 0, 100, false, 10);
                setTimeout(() => this.settings.events.onThoughtClick(thought), 250);
            break;
        }
    }

    /**
     * Returns the global animations config
     * @returns {any}
     */
    static get mainConfig(): any {
        const config = new Configuration();
        return config.animations;
    }
}

export default AnimationManager;