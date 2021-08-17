import { Mesh, Vector3, Space, Scene } from "babylonjs";
import ObjectManager from "./ObjectManager";

class AnimationManager {
    scene: Scene;
    objectManager: ObjectManager;

    constructor(scene: Scene, objectManager: ObjectManager) {
        this.scene = scene;
        this.objectManager = objectManager;
    }

    run(): void  {
        const objects = this.objectManager.getAll();
        objects.forEach(object => object.runAnimations());
    }   
}

export default AnimationManager;