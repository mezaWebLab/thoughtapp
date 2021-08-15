/**
 * Configuration class. 
 * Contains core configuration of game.
 */
class Configuration {
    private _camera = {
        default: {
            key: "DefaultCamera",
            initialPosition: { x: 1, z: 1, y: 1 } 
        }
    };

    get camera() {
        return this._camera;
    }
}

export default Configuration;