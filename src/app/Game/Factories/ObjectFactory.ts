import Pivot from "../Objects/Pivot";
import { Scene } from "babylonjs";

/**
 * Object Factory Class
 * Responsible for generating objects
 */
class ObjectFactory {
    /**
     * Creates a new pivot object
     * @param {string} pivotKey - the object key to use
     * @param {Scene} scene - the babylon.js scene
     * @returns 
     */
    static createPivot(pivotKey: string, scene: Scene): Pivot {
        return new Pivot(pivotKey, scene);
    }
}

export default ObjectFactory;