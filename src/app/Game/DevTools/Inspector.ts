import SceneManager from "../Managers/SceneManager";
import Engine from "../Engine";

class Inspector {
    sceneManager: SceneManager;

    constructor(engine: Engine) {
        this.sceneManager = new SceneManager(engine);
        this.sceneManager.default.debugLayer.show();
    }
}

export default Inspector;