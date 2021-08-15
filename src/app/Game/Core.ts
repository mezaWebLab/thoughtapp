import Configuration from "./Configuration";
import Engine from "./Engine";
import SceneManager from "./SceneManager";
import CameraManager from "./CameraManager";

/**
 * Main class of the game. 
 * Contains core data and logic of game.
 * @param {HTMLCanvasElement} canvas - the canvas element webgl attaches to
 * @param {Configuration} config - the game's global configuration
 */
class Core {
    canvas: HTMLCanvasElement;
    config: Configuration;
    engine: Engine;
    sceneManager: SceneManager;
    cameraManager: CameraManager;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.config = new Configuration();
        this.engine = new Engine(this.canvas);
        this.sceneManager = new SceneManager(this.engine);
        this.cameraManager = new CameraManager(this.sceneManager.default);
    }

    public init(): void {
        this.engine.core.runRenderLoop(() => {
            this.sceneManager.default.render();
        });
    }
}

export default Core;