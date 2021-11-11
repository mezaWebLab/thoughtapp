import Configuration from "../Configuration";
import { Scene } from "babylonjs";
import ObjectFactory from "../Factories/ObjectFactory";

/**
 * Class responsible for managing game objects
 * @param {any} config - the object's main configuration
 * @param {Array<any>} objects - array containing all created objects
 */
class ObjectManager {
    config: any;
    scene: Scene;
    objects: Array<any>;

    constructor(scene: Scene) {
        const config = new Configuration();
        this.config = config.objects;
        this.scene = scene;
        this.objects = [];
    }

    /**
     * Creates an object with specified data
     * @param {string} objectName - the name for the object. will be used as the object key
     * @param {any} data - misc. data to be used during object creation
     */
    createObject(objectName: string, data?: any): void {
        switch (objectName) {
            case "pivot":
                this.objects.push(ObjectFactory.createPivot(data.key, this.scene));
            break;
        }
    }

    /**
     * Locates object and returns it using object key
     * @param {string} key - the object key
     * @returns {any}
     */
    getObjectByKey(key: string): any {
        return this.objects.find(obj => { return obj.key === key });
    }

    /**
     * Returns all objects
     * @returns {Array<any>}
     */
    getAll(): Array<any> {
        return this.objects;
    }

    flushAll(): void {
        this.objects.forEach(thought => thought.mesh?.dispose());
        this.objects = [];
    }
}

export default ObjectManager;