import ThoughtFactory from "../Factories/ThoughtFactory";
import Thought from "../Objects/Thought";
import SceneManager from "./SceneManager";
import ThoughtData from "../Interfaces/ThoughtData";
import NetworkManager from "./NetworkManager";
import Configuration from "../Configuration";
import * as BB from "babylonjs";
import ThoughtUtils from "../Utils/ThoughtUtils";
import ObjectManager from "./ObjectManager";

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
    objectManager: ObjectManager;
    thoughts: Array<Thought>;
    utils: ThoughtUtils;

    constructor(sceneManager: SceneManager, networkManager: NetworkManager, objectManager: ObjectManager) {
        const config = new Configuration();
        this.config = config.thoughts;
        this.sceneManager = sceneManager;
        this.networkManager = networkManager;
        this.objectManager = objectManager;
        this.thoughts = [];
        this.utils = new ThoughtUtils();
    }

    async init(): Promise<any> {
        let rawThoughtData = await this.networkManager.get(this.networkManager.config.routes.thoughts),
            configuredThoughts = [];

        for (let i = 0; i < rawThoughtData.length; i++) {
            configuredThoughts.push(this.configureThought(rawThoughtData[i]));
        }
        
        this.createMany(configuredThoughts);
        this.renderAllPending();
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

    getThought(where: any, fromCache: boolean = false) {
        if (!fromCache) {

        } else {
            return this.thoughts.find(thought => { return thought.id === parseInt(where.id) });
        }
    }

    createMany(thoughtData: Array<any>): void {
        thoughtData.forEach(thought => {
            this.thoughts.push(ThoughtFactory.create(thought));
            this.objectManager.requestObject("pivot", { key: `thought-${ thought.id }-pivot` });
        });
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
                thought.mesh.isPickable = true;
                thought.rendered = true;
                this.linkThoughtToPivot(thought, thought.pivotKey);
            }
        });
    }

    linkThoughtToPivot(thought: Thought, pivotKey: string): void {
        const pivot = this.objectManager.getObjectByKey(pivotKey);
        //@ts-ignore
        thought.mesh.parent = pivot.mesh;
    }
}

export default ThoughtManager;