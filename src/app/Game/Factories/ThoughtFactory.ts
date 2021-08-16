import Thought from "../Objects/Thought";

/**
 * Responsible for creating thoughts
 */
class ThoughtFactory {
    static create(): Thought {
        return new Thought();
    }
}

export default ThoughtFactory;