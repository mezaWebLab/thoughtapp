import Pivot from "../Objects/Pivot";
import { Scene } from "babylonjs";

class ObjectFactory {
    static createPivot(pivotKey: string, scene: Scene): Pivot {
        return new Pivot(pivotKey, scene);
    }
}

export default ObjectFactory;