import Configuration from "../Configuration";
import { MeshBuilder, Scene } from "babylonjs";
import Pivot from "../Objects/Pivot";
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

    requestObject(objectName: string, data?: any): void {
        switch (objectName) {
            case "pivot":
                this.objects.push(ObjectFactory.createPivot(data.key, this.scene));
            break;
        }
    }

    getObjectByKey(key: string): any {
        return this.objects.find(obj => { return obj.key === key });
    }

    getAll() {
        return this.objects;
    }
}

export default ObjectManager;