import Configuration from "./Configuration";
import Engine from "./Engine";
import SceneManager from "./Managers/SceneManager";
import CameraManager from "./Managers/CameraManager";
import EnvironmentManager from "./Managers/EnvironmentManager";
import Inspector from "./Tools/Inspector";

/**
 * Main class of the game. 
 * Contains core data and logic of game.
 * @param {HTMLCanvasElement} canvas - the canvas element webgl attaches to
 * @param {Configuration} config - the game's global configuration
 * @param {Engine} engine - the game's engine. loads the babylon.js core engine
 * @param {SceneManager} sceneManager - the scene manager of the game. handles anything to do with game scenes
 * @param {CameraManager} cameraManager - the game's camera manager, manages camera logic
 * @param {EnvironmentManager} environmentManager - handles anything to do with the world's environment
 * @param {Inspector} inspector - (optional) the babylon.js inspector, used for debugging and development
 */
class Core {
    canvas: HTMLCanvasElement;
    config: Configuration;
    engine: Engine;
    sceneManager: SceneManager;
    cameraManager: CameraManager;
    environmentManager: EnvironmentManager;
    inspector?: Inspector;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.config = new Configuration();
        this.engine = new Engine(this.canvas);
        this.sceneManager = new SceneManager(this.engine);
        this.cameraManager = new CameraManager(this.sceneManager.default);
        this.environmentManager = new EnvironmentManager(this.sceneManager);
    }

    /**
     * Initializes engine render loop and window events
     * @returns {void}
     */
    public init(): void {
        if (this.config.development.showInspector) this.inspector = new Inspector(this.engine.core);

        this.engine.core.runRenderLoop(() => {
            this.sceneManager.default.render();
        });

        window.addEventListener("resize", () => this.engine.core.resize());
    }
}

export default Core;