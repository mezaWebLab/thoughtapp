import Configuration from "../Configuration";
import SceneManager from "../Managers/SceneManager";
import Inspector from "./Inspector";
import Engine from "../Engine";
import Axis from "../Objects/Axis";

/**
 * Dev Tools class is responsible for managing various modules used
 * during development
 * @param {Configuration} config - the game's global configuration
 * @param {Engine} engine - the game's core engine, includes babylon.js engine
 * @param {SceneManager} sceneManager - the game's scene manager
 * @param {Inspector} inspector (optional) - includes babylon.js inspector
 * @param {Axis} axis (optional) - the world's XYZ axis object. used for world orientation
 */
class DevTools {
    config: Configuration;
    engine: Engine;
    sceneManager: SceneManager;
    inspector?: Inspector;
    axios?: Axis;

    constructor(engine: Engine, sceneManager: SceneManager) {
        this.config = new Configuration();
        this.engine = engine;
        this.sceneManager = sceneManager;
        if (this.config.development.showInspector) this.inspector = new Inspector(this.engine);
        if (this.config.development.showAxis) this.axios = new Axis(this.sceneManager);
    }
}

export default DevTools;