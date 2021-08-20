import SceneManager from "./SceneManager";
import * as BB from "babylonjs";
import Configuration from "../Configuration";

/**
 * Class reponsible for handling anything to do with
 * the game's environment, such as clear color,
 * skybox, backgrounds, effects, etc
 * @param {SceneManager} sceneManager - The game's scene manager class
 * @param {Configuration} config - the game's configuration class
 */
class EnvironmentManager {
    sceneManager: SceneManager;
    config: Configuration;

    constructor(scene: SceneManager) {
        this.sceneManager = scene;
        this.config = new Configuration();
        this.sceneManager.default.clearColor = BB.Color3.FromHexString(this.config.global.clearColor);
        var gl = new BB.GlowLayer("glow", this.sceneManager.default);
    }
}

export default EnvironmentManager;