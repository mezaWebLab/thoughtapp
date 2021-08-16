import ThoughtFactory from "../Factories/ThoughtFactory";
import Thought from "../Objects/Thought";
import SceneManager from "./SceneManager";
import ThoughtData from "../Interfaces/ThoughtData";
import NetworkManager from "./NetworkManager";
import Configuration from "../Configuration";
import * as BB from "babylonjs";
import ThoughtUtils from "../Utils/ThoughtUtils";

/**
 * Thought Manager class. responsible for managing thoughts and all their logic
 * @param {any} config - the thoughts global configuration
 * @param {SceneManager} sceneManager - the game's scene manager
 * @param {NetworkManager} networkManager - the game's network manager
 * @param {Array<Thought>} thoughts - array containing all thoughts stored in memory
 * @param {ThoughtUtils} utils - utility class for thoughts
 */
class ThoughtManager {
    config: any;
    sceneManager: SceneManager;
    networkManager: NetworkManager;
    thoughts: Array<Thought>;
    utils: ThoughtUtils;

    constructor(sceneManager: SceneManager, networkManager: NetworkManager) {
        const config = new Configuration();
        this.config = config.thoughts;
        this.sceneManager = sceneManager;
        this.networkManager = networkManager;
        this.thoughts = [];
        this.utils = new ThoughtUtils();
    }

    async start(): Promise<any> {
        let rawThoughtData = await this.networkManager.fetchThoughts(),
            configuredThoughts = [];

        for (let i = 0; i < rawThoughtData.length; i++) {
            configuredThoughts.push(this.configureThought(rawThoughtData[i]));
        }
        
        this.createMany(configuredThoughts);
        this.renderAllPending();
    }

    createMany(thoughtData: Array<any>): void {
        thoughtData.forEach(thought => this.thoughts.push(ThoughtFactory.create(thought)));
    }

    configureThought(rawThoughtData: any): ThoughtData {
        return {
            id: rawThoughtData.id,
            body: rawThoughtData.body,
            created_at: rawThoughtData.created_at,
            updated_at: rawThoughtData.updated_at,
            rendered: false
        }
    }

    renderAllPending(): void {
        this.thoughts.forEach(thought => {
            if (!thought.rendered) {
                thought.mesh = BB.MeshBuilder.CreateSphere(`thought-${ thought.id }`, { diameter: this.config.baseDiameter }, this.sceneManager.default);
                thought.mesh.material = new BB.StandardMaterial(`thought-${ thought.id }-materiial`, this.sceneManager.default);
                // @ts-ignore
                thought.mesh.material.emissiveColor = new BB.Color3(1, 1, 1);
                thought.mesh.position.x = this.utils.getRandomX();
                thought.mesh.position.z = this.utils.getRandomZ();
                thought.mesh.position.y = this.utils.getRandomY();
            }
        });
    }
}

export default ThoughtManager;