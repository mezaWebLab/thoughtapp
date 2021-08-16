import Thought from "../Objects/Thought";
import ThoughtData from "../Interfaces/ThoughtData";

/**
 * Responsible for creating thoughts
 */
class ThoughtFactory {
    /**
     * Cretes a single thought
     * @param {ThoughtData} thoughtData - the thought data
     * @returns {Thought}
     */
    static create(thoughtData: ThoughtData): Thought {
        return new Thought(thoughtData);
    }
}

export default ThoughtFactory;