import SceneManager from "../Managers/SceneManager";
import Configuration from "../Configuration";

/**
 * Class representing an Axis object.
 * Shows world axis. Used for development
 * @param {SceneManager} sceneManager - the core scene manager
 * @param {Configuration} config - the global configuration
 */
class Axis {
    sceneManager: SceneManager;
    config: Configuration;

    constructor(sceneManager: SceneManager) {
        this.sceneManager = sceneManager
        this.config = new Configuration();
        this.init();
    }

    /**
     * Initializes and creates axis meshes
     * @returns {void}
     */
    public init(): void {
		var makeTextPlane = (text: any, color: any, size: any) => {
            var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, this.sceneManager.default, true);
            dynamicTexture.hasAlpha = true;
            dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
            var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, this.sceneManager.default, true);
            plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", this.sceneManager.default);
            plane.material.backFaceCulling = false;
            // @ts-ignore
            plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
            // @ts-ignore
            plane.material.diffuseTexture = dynamicTexture;
            return plane;
        };
        
        var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(this.config.development.axisSize, 0, 0), new BABYLON.Vector3(this.config.development.axisSize * 0.95, 0.05 * this.config.development.axisSize, 0), 
            new BABYLON.Vector3(this.config.development.axisSize, 0, 0), new BABYLON.Vector3(this.config.development.axisSize * 0.95, -0.05 * this.config.development.axisSize, 0)
        ], this.sceneManager.default);

        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = makeTextPlane("X", "red", this.config.development.axisSize / 10);
        xChar.position = new BABYLON.Vector3(0.9 * this.config.development.axisSize, -0.05 * this.config.development.axisSize, 0);

        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, this.config.development.axisSize, 0), new BABYLON.Vector3( -0.05 * this.config.development.axisSize, this.config.development.axisSize * 0.95, 0), 
            new BABYLON.Vector3(0, this.config.development.axisSize, 0), new BABYLON.Vector3( 0.05 * this.config.development.axisSize, this.config.development.axisSize * 0.95, 0)
        ], this.sceneManager.default);

        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = makeTextPlane("Y", "green", this.config.development.axisSize / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * this.config.development.axisSize, -0.05 * this.config.development.axisSize);

        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, this.config.development.axisSize), new BABYLON.Vector3( 0 , -0.05 * this.config.development.axisSize, this.config.development.axisSize * 0.95),
            new BABYLON.Vector3(0, 0, this.config.development.axisSize), new BABYLON.Vector3( 0, 0.05 * this.config.development.axisSize, this.config.development.axisSize * 0.95)
        ], this.sceneManager.default);

        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = makeTextPlane("Z", "blue", this.config.development.axisSize / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * this.config.development.axisSize, 0.9 * this.config.development.axisSize);
    }
}

export default Axis;