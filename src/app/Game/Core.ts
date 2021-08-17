import Configuration from "./Configuration";
import Engine from "./Engine";
import SceneManager from "./Managers/SceneManager";
import CameraManager from "./Managers/CameraManager";
import EnvironmentManager from "./Managers/EnvironmentManager";
import DevTools from "./DevTools/DevTools";
import ThoughtManager from "./Managers/ThoughtManager";
import NetworkManager from "./Managers/NetworkManager";
import EventManager from "./Managers/EventManager";
import IOManager from "./Managers/IOManager";
import ObjectManager from "./Managers/ObjectManager";
import CoreAnimationManager from "./Managers/CoreAnimationManager";

/**
 * Main class of the game. 
 * Contains core data and logic of game.
 * @param {HTMLCanvasElement} canvas - the canvas element webgl attaches to
 * @param {Configuration} config - the game's global configuration
 * @param {Engine} engine - the game's engine. loads the babylon.js core engine
 * @param {SceneManager} sceneManager - the scene manager of the game. handles anything to do with game scenes
 * @param {CameraManager} cameraManager - the game's camera manager, manages camera logic
 * @param {EnvironmentManager} environmentManager - handles anything to do with the world's environment
 * @param {ThoughtManager} thoughtManager - the thought manager. manages anything to do with thought logic
 * @param {EventManager} eventManager - IO manager is responsible for handling input and output controls
 * @param {IOManager} ioManager - IO manager is responsible for handling input and output controls
 * @param {DevTools} devTools - the devtools module. contains various useful tools to be used during development
 */
class Core {
    canvas: HTMLCanvasElement;
    config: Configuration;
    engine: Engine;
    sceneManager: SceneManager;
    cameraManager: CameraManager;
    environmentManager: EnvironmentManager;
    networkManager: NetworkManager;
    objectManager: ObjectManager;
    thoughtManager: ThoughtManager;
    eventManager: EventManager;
    ioManager: IOManager;
    CoreAnimationManager: CoreAnimationManager;
    devTools?: DevTools;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.config = new Configuration();
        this.engine = new Engine(this.canvas);
        this.sceneManager = new SceneManager(this.engine);
        this.cameraManager = new CameraManager(this.sceneManager.default);
        this.environmentManager = new EnvironmentManager(this.sceneManager);
        this.networkManager = new NetworkManager();
        this.objectManager = new ObjectManager(this.sceneManager.default);
        this.thoughtManager = new ThoughtManager(this.sceneManager, this.networkManager, this.objectManager);
        this.eventManager = new EventManager(this.sceneManager, this.thoughtManager);
        this.ioManager = new IOManager(this.sceneManager, this.eventManager);
        this.CoreAnimationManager = new CoreAnimationManager(this.sceneManager.default, this.objectManager);
        if (this.config.development.devTools) this.devTools = new DevTools(this.engine, this.sceneManager);
    }

    /**
     * Initializes engine render loop and window events and starts thought manager main tasks
     * @returns {void}
     */
    async init(): Promise<void> {
        this.engine.core.runRenderLoop(() => {
            this.sceneManager.default.render();
            this.CoreAnimationManager.run();
        });
        this.thoughtManager.init();
        this.ioManager.init();
        window.addEventListener("resize", () => this.engine.core.resize());
    }
}

export default Core;