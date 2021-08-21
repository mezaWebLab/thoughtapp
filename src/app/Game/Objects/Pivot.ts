import { TransformNode, Vector3, Mesh, MeshBuilder, Scene, StandardMaterial, Color3, Space } from "babylonjs";
import Configuration from "../Configuration";
import CalcUtils from "../Utils/CalcUtils";
import AnimationManager from "../Managers/AnimationManager";

/**
 * Class representing the pivot point which thoughts rotate around
 * @param {}
 */
class Pivot {
    config: any;
    key: string;
    scene: Scene;
    mesh: TransformNode;
    angle: Vector3;
    rotationSpeed: number;
    animated: boolean;

    constructor(key: string, scene: Scene) {
        const config = new Configuration();
        this.config = config.objects.pivot;
        this.key = key;
        this.scene = scene;
        this.mesh = new TransformNode(key);
        this.mesh.position.x = this.config.position.x;
        this.mesh.position.y = this.config.position.y;
        this.mesh.position.z = this.config.position.z;
        this.angle = CalcUtils.randomVector3();
        this.rotationSpeed = AnimationManager.mainConfig.thoughtRotationSpeed;
        this.animated = true;
    }

    runAnimations(): void {
        if (this.animated) this.mesh.rotate(this.angle, this.rotationSpeed, Space.WORLD);
    }

    onSelect(): void {
        this.animated = false;
    }
}

export default Pivot;