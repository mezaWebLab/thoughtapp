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

    constructor(sceneManager: SceneManager, thoughtManager: ThoughtManager) {
        this.sceneManager = sceneManager;
        this.thoughtManager = thoughtManager;
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
        }
    }

    /**
     * On thought click event handler
     * @param {string} thoughtMeshKey - the thoughts unique key (set during creation)
     * @returns {void}
     */
    onThoughtClick(thoughtMeshKey: string): void {
        const thoughtId = thoughtMeshKey.split("-")[1];
        console.log(this.thoughtManager.getThought({ id: thoughtId }, true));
    }
}

export default EventManager;