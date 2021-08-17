import { Mesh, MeshBuilder, Scene } from "babylonjs";
import Configuration from "../Configuration";

/**
 * Class representing the pivot point which thoughts rotate around
 * @param {}
 */
class Pivot {
    config: any;
    pivotKey: string;
    scene: Scene;
    mesh: Mesh;

    constructor(pivotKey: string, scene: Scene) {
        const config = new Configuration();
        this.config = config.objects.pivot;
        this.pivotKey = pivotKey;
        this.scene = scene;
        this.mesh = MeshBuilder.CreateSphere(pivotKey, { diameter: this.config.pivot.diameter });
    }
}

export default Pivot;