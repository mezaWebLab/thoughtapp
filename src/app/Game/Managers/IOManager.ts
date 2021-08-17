import EventManager from "./EventManager";
import SceneManager from "./SceneManager";

/**
 * Class responsible for handling and input and output interactionsbetween user and app
 * @param {SceneManager} sceneManager - the game's scene manager
 * @param {EventManager} eventManager - the game's event manager
 */
class IOManager {
    sceneManager: SceneManager;
    eventManager: EventManager;

    constructor(sceneManager: SceneManager, eventManager: EventManager) {
        this.sceneManager = sceneManager;
        this.eventManager = eventManager;
    }

    /**
     * Initializes IO events
     * @returns {void}
     */
    init(): void {
        this.sceneManager.default.onPointerMove = (evt: any, p: any) => {
        }

        this.sceneManager.default.onPointerDown = (evt: any, pickResult: any) => {
            if (pickResult.hit) this.eventManager.emit("thought-click", pickResult.pickedMesh.name);
        };
    }
}

export default IOManager;