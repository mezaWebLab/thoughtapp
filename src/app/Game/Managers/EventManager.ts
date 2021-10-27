import interact from '@interactjs/interact';
import AnimationManager from "./AnimationManager";
import CameraManager from "./CameraManager";
import SceneManager from "./SceneManager";
import ThoughtManager from "./ThoughtManager";

/**
 * Class responsible for handling game events
 * @param {SceneManager} sceneManager - the game's scene manager
 * @param {ThoughtManager} thoughtManager - the game's thought manager
 * @param {AnimationManager} animationManager - the animation manager
 * @param {CameraManager} cameraManager - the camera manager
 */
class EventManager {
    sceneManager: SceneManager;
    thoughtManager: ThoughtManager;
    animationManager: AnimationManager;
    cameraManager: CameraManager;

    constructor(sceneManager: SceneManager, thoughtManager: ThoughtManager, animationManager: AnimationManager, cameraManager: CameraManager) {
        this.sceneManager = sceneManager;
        this.thoughtManager = thoughtManager;
        this.animationManager = animationManager;
        this.cameraManager = cameraManager;

        // @ts-ignore
        if (typeof interact === "function") {
            // @ts-ignore
            interact(document.getElementById("game-canvas"))
                .draggable({
                    inertia: true,
                    listeners: {
                        move: (e: any) => {
                            this.emit("swipe", { x: e.delta.x, y: e.delta.y });
                        }
                    }
                });
        }
    }

    /**
     * Maps event with event handler using eventKey
     * @param {string} eventKey 
     * @param {any} data 
     * @returns {void}
     */
    emit(eventKey: string, data?: any): void {
        switch (eventKey) {
            case "thought-click":
                this.onThoughtClick(data);
            break;
            case "swipe":
                this.onSwipe(data);
            break;
        }
    }

    /**
     * On thought click event handler
     * @param {string} thoughtMeshKey - the thoughts unique key (set during creation)
     * @returns {void}
     */
    onThoughtClick(thoughtMeshKey: string): void {
        const thoughtId = thoughtMeshKey.split("-")[1],
            thought = this.thoughtManager.getThought({ id: thoughtId }, true);

        this.animationManager.runAnimation("move-thought-to-camera", { thought });
    }

    /**
     * Handlers mobile touch swipe event
     * @param {any} swipeData - the swipe data object received from library (hammer.js)
     */
    onSwipe(swipeData: any): void {
        this.cameraManager.default.rotation.x += -swipeData.y / 500;
        this.cameraManager.default.rotation.y += -swipeData.x / 500;
        console.log({x: this.cameraManager.default.rotation.x, y: this.cameraManager.default.rotation.y });
    }
}

export default EventManager;