import ThoughtFactory from "../Factories/ThoughtFactory";
import Thought from "../Objects/Thought";
import SceneManager from "./SceneManager";
import ThoughtData from "../Interfaces/ThoughtData";
import NetworkManager from "./NetworkManager";
import Configuration from "../Configuration";
import * as BB from "babylonjs";
import ThoughtUtils from "../Utils/ThoughtUtils";
import ObjectManager from "./ObjectManager";
import Geolocation from "../Interfaces/Geolocation";
import CalcUtils from "../Utils/CalcUtils";

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
    mode: string | null;
    sceneManager: SceneManager;
    networkManager: NetworkManager;
    objectManager: ObjectManager;
    thoughts: Array<Thought>;
    utils: ThoughtUtils;
    active: boolean;

    constructor(sceneManager: SceneManager, networkManager: NetworkManager, objectManager: ObjectManager) {
        const config = new Configuration();
        this.config = config.thoughts;
        this.mode = null;
        this.sceneManager = sceneManager;
        this.networkManager = networkManager;
        this.objectManager = objectManager;
        this.thoughts = [];
        this.utils = new ThoughtUtils();
        this.active = false;
    }

    async init(demoMode: boolean = false): Promise<any> {
        this.mode = demoMode ? "demo" : "live";
        await this.launchCurrentMode();
    }

    async launchCurrentMode(): Promise<void> {
        if (this.active) this.clearAllThoughts();

        switch (this.mode) {
            // case "live":
            //     try {
            //         let rawThoughtData = await this.networkManager.get(this.networkManager.config.routes.thoughts, true),
            //             configuredThoughts = [];
        
            //         for (let i = 0; i < rawThoughtData.length; i++) {
            //             configuredThoughts.push(this.configureThought(rawThoughtData[i]));
            //         }
                    
            //         this.createMany(configuredThoughts);
            //         this.renderAllPending();
            //     } catch (e) {
            //         console.log(e);
            //         console.log("unable to reach thought server");
            //     }
            // break;
            case "demo":
                const dummyThoughtData = this.generateDummyThoughtData();
                this.createMany(dummyThoughtData);
                this.renderAllPending();
            break;
            default:
                console.log("Waiting to fetch thoughts..");
            break;
        }
    }

    configureThought(rawThoughtData: any): ThoughtData {
        return {
            id: rawThoughtData.id,
            body: rawThoughtData.body,
            hex: rawThoughtData.hex,
            created_at: rawThoughtData.created_at,
            updated_at: rawThoughtData.updated_at,
            rendered: false
        }
    }

    getThought(where: any, fromCache: boolean = true) {
        if (!fromCache) {
            // todo
        } else {
            return this.thoughts.find(thought => { return thought.id === parseInt(where.id) });
        }
    }

    createMany(thoughtData: Array<any>): void {
        thoughtData.forEach(thought => {
            this.thoughts.push(ThoughtFactory.create(thought));
            this.objectManager.createObject("pivot", { key: `thought-${ thought.id }-pivot` });
        });
    }

    renderAllPending(): void {
        this.thoughts.forEach(thought => {
            if (!thought.rendered) {
                thought.mesh = BB.MeshBuilder.CreateSphere(`thought-${ thought.id }`, { diameter: this.config.baseDiameter }, this.sceneManager.default);
                thought.mesh.material = new BB.StandardMaterial(`thought-${ thought.id }-materiial`, this.sceneManager.default);
                // @ts-ignore
                thought.mesh.material.emissiveColor = new BB.Color3.FromHexString(thought.hex);
                thought.mesh.position.x = thought.position.x;
                thought.mesh.position.z = thought.position.z;
                thought.mesh.position.y = thought.position.y;
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

    clearAllThoughts(): void {

    }

    generateDummyThoughtData(): Array<any> {
        const dummyThoughts = [],
            generalConfig = new Configuration();
            
        for (let i = 0; i < generalConfig.demoMode.amountOfDummyThoughts; i++) {
            dummyThoughts.push({
                id: `dummy-thought-${  Math.round(Math.random() * 100) }`,
                body: null,
                hex: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}),
                created_at: null,
                updated_at: null,
                rendered: false
            });
        }

        return dummyThoughts;
    }

    async fetchThoughtsByCoords(coords: Geolocation): Promise<any> {
        const data = await this.networkManager.post(this.networkManager.config.routes.nearbyThoughts, coords, true);

        if (data.length > 0) {
            const thoughts: any = [];

            data.forEach((thought: any) => {
                thoughts.push(this.configureThought(thought));
            });

            this.createMany(thoughts);
            this.renderAllPending();
        }
    }
}

export default ThoughtManager;