import AnimationManager from "./AnimationManager";
import CameraManager from "./CameraManager";
import SceneManager from "./SceneManager";
import ThoughtManager from "./ThoughtManager";

/**
 * Class responsible for handling game events
 * @param {SceneManager} sceneManager - the game's scene manager
 * @param {ThoughtManager} thoughtManager - the game's thought manager
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
        console.log("swiping!");
        console.log(swipeData);
        this.cameraManager.default.rotation.x += swipeData.velocityX / 4;
        this.cameraManager.default.rotation.y += swipeData.velocityY / 4;
    }
}

export default EventManager;