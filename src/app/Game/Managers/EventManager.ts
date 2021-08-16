import SceneManager from "./SceneManager";
import ThoughtManager from "./ThoughtManager";

class EventManager {
    sceneManager: SceneManager;
    thoughtManager: ThoughtManager;

    constructor(sceneManager: SceneManager, thoughtManager: ThoughtManager) {
        this.sceneManager = sceneManager;
        this.thoughtManager = thoughtManager;
    }

    emit(eventKey: string, data?: any): void {
        switch (eventKey) {
            case "thought-click":
                this.onThoughtClick(data);
            break;
        }
    }

    onThoughtClick(thoughtMeshKey: string): void {
        const thoughtId = thoughtMeshKey.split("-")[1];
        console.log(this.thoughtManager.getThought({ id: thoughtId }, true));
    }
}

export default EventManager;