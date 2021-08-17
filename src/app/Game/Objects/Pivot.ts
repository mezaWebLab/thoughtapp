import { Mesh, MeshBuilder, Scene, StandardMaterial, Color3 } from "babylonjs";
import Configuration from "../Configuration";
import ObjectAnimationManager from "../Managers/ObjectAnimationManager";

/**
 * Class representing the pivot point which thoughts rotate around
 * @param {}
 */
class Pivot {
    config: any;
    key: string;
    scene: Scene;
    mesh: Mesh;

    constructor(key: string, scene: Scene) {
        const config = new Configuration();
        this.config = config.objects.pivot;
        this.key = key;
        this.scene = scene;
        this.mesh = MeshBuilder.CreateSphere(key, { diameter: this.config.diameter });
        this.mesh.position.x = this.config.position.x;
        this.mesh.position.y = this.config.position.y;
        this.mesh.position.z = this.config.position.z;
        this.mesh.material = new StandardMaterial(`${ key }-material`, this.scene);
        //@ts-ignore
        this.mesh.material.emissiveColor = new Color3.FromHexString("#ff0000");
    }

    runAnimations(): void {
        ObjectAnimationManager.rotate(this.mesh);
    }
}

export default Pivot;