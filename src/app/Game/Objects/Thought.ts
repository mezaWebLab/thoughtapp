import ThoughtData from "../Interfaces/ThoughtData";
import Position from "../Interfaces/Position";
import Configuration from "../Configuration";
import { Mesh, Color3 } from "babylonjs";
import ThoughtUtils from "../Utils/ThoughtUtils";

/**
 * Main Thought class. Contains all logic related to thoughts 
 *  @param {ThoughtData} - interface containing thought configuration
 */
class Thought implements ThoughtData {
    config: any;
    id: number;
    body: string;
    hex: string;
    utils: ThoughtUtils;
    position: Position;
    created_at: Date;
    updated_at: Date;
    rendered: boolean;
    mesh?: Mesh;
    pivotKey: string;

    constructor(thoughtData: ThoughtData) {
        const config = new Configuration();
        this.config = config.thoughts;
        this.id = thoughtData.id;
        this.body = thoughtData.body;
        this.hex = thoughtData.hex;
        this.utils = new ThoughtUtils();
        this.position = {
            x: this.utils.getRandomX(),
            z: this.utils.getRandomZ(),
            y: this.utils.getRandomY()
        };
        this.created_at = thoughtData.created_at;
        this.updated_at = thoughtData.updated_at;
        this.rendered = thoughtData.rendered;
        this.pivotKey = `thought-${ this.id }-pivot`;
    }

    onSelect(): void {
    }
}

export default Thought;