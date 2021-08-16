import ThoughtData from "../Interfaces/ThoughtData";
import Configuration from "../Configuration";
import { Mesh } from "babylonjs";

/**
 * Main Thought class. Contains all logic related to thoughts 
 *  @param {ThoughtData} - interface containing thought configuration
 */
class Thought implements ThoughtData {
    config: any;
    id: number;
    body: string;
    created_at: Date;
    updated_at: Date;
    rendered: boolean;
    mesh?: Mesh;

    constructor(thoughtData: ThoughtData) {
        const config = new Configuration();
        this.config = config.thoughts;
        this.id = thoughtData.id;
        this.body = thoughtData.body;
        this.created_at = thoughtData.created_at;
        this.updated_at = thoughtData.updated_at;
        this.rendered = thoughtData.rendered;
    }
}

export default Thought;