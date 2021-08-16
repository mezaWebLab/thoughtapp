import ThoughtFactory from "../Factories/ThoughtFactory";
import Thought from "../Objects/Thought";
import SceneManager from "./SceneManager";

/**
 * Thought Manager class. responsible for managing thoughts and all their logic
 * @param {Array<Thought>} thoughts - array containing all current viewable thoughts
 */
class ThoughtManager {
    sceneManager: SceneManager;
    thoughts: Array<Thought>;

    constructor(sceneManager: SceneManager) {
        this.sceneManager = sceneManager;
        this.thoughts = [];
    }

    createAll(): void {

    }
}

export default ThoughtManager;