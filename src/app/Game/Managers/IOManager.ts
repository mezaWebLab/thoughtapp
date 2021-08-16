import EventManager from "./EventManager";
import SceneManager from "./SceneManager";

class IOManager {
    sceneManager: SceneManager;
    eventManager: EventManager;

    constructor(sceneManager: SceneManager, eventManager: EventManager) {
        this.sceneManager = sceneManager;
        this.eventManager = eventManager;
    }

    init(): void {
        this.sceneManager.default.onPointerMove = (evt: any, p: any) => {
        }

        this.sceneManager.default.onPointerDown = (evt: any, pickResult: any) => {
            if (pickResult.hit) this.eventManager.emit("thought-click", pickResult.pickedMesh.name);
        };
    }
}

export default IOManager;