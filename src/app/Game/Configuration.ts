/**
 * Configuration class. 
 * Contains core configuration of game.
 * This doesn't modify game data real-time, 
 * it merely stores it for initial loading.
 */
class Configuration {
    private _global = {
        clearColor: "#000000"
    };

    private _development = {
        showInspector: true
    };

    private _camera = {
        default: {
            key: "DefaultCamera",
            initialPosition: { x: 1, z: 1, y: 1 } 
        }
    };

    /**
     * Returns global settings
     * @returns {_global}
     */
    get global() {
        return this._global;
    }

    /**
     * Returns development settings
     * @returns {_development}
     */
    get development() {
        return this._development;
    }

    /**
     * Returns global camera settings
     * @returns {_camera} 
     */
    get camera() {
        return this._camera;
    }
}

export default Configuration;