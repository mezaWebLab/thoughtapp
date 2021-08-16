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

    private _network = {
        apiUrl: process.env.API_URL,
        routes: {
            thoughts: "/thoughts"
        }
    }

    private _development = {
        devTools: true,
        showInspector: false,
        showAxis: true,
        axisSize: 10
    };

    private _camera = {
        default: {
            key: "DefaultCamera",
            initialPosition: { x: -1, z: 0, y: 1 },
            attachControls: true
        }
    };

    private _thoughts = {
        enabled: true,
        placement: {
            max: { x: 15, z: 15, y: 15 },
            min: { x: -15, z: 15, y: 15 }
        },
        baseDiameter: 0.075
    }

    /**
     * Returns global settings
     * @returns {_global}
     */
    get global() {
        return this._global;
    }

    /**
     * Returns global settings
     * @returns {_network}
     */
     get network() {
        return this._network;
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

    /**
     * Returns thoughts settings
     * @returns {_thoughts}
     */
    get thoughts() {
        return this._thoughts;
    }
}

export default Configuration;