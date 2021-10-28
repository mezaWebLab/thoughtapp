/**
 * Configuration class. 
 * Contains core configuration of game.
 * This doesn't modify game data real-time, 
 * it merely stores it for initial loading.
 */
class Configuration {
    private _development = {
        devTools: true,
        showInspector: false,
        showAxis: false,
        axisSize: 10
    };

    private _global = {
        clearColor: "#000000"
    };

    private _network = {
        apiUrl: process.env.API_URL,
        routes: {
            auth: "/auth",
            thoughts: "/thoughts",
            login: "/user/login"
        }
    }

    private _camera = {
        default: {
            key: "DefaultCamera",
            initialPosition: { x: 5, z: 5, y: 5 },
            attachControls: false
        }
    };

    private _thoughts = {
        enabled: true,
        placement: {
            max: { x: 2, z: 2, y: 2 },
            min: { x: -2, z: -2, y: -2 }
        },
        baseDiameter: 0.075
    }

    private _objects = {
        pivot: {
            position: { x: 5, z: 5, y: 5 },
            diameter: 0.25
        }
    }

    private _animations = {
        thoughtRotationSpeed: 0.0009
    }

    private _demoMode = {
        amountOfDummyThoughts: 400
    }

    /**
     * Returns global settings
     * @returns {object}
     */
    get global() {
        return this._global;
    }

    /**
     * Returns global settings
     * @returns {object}
     */
     get network() {
        return this._network;
    }

    /**
     * Returns development settings
     * @returns {object}
     */
    get development() {
        return this._development;
    }

    /**
     * Returns global camera settings
     * @returns {object} 
     */
    get camera() {
        return this._camera;
    }

    /**
     * Returns thoughts settings
     * @returns {object}
     */
    get thoughts() {
        return this._thoughts;
    }

    /**
     * Returns object settings
     * @returns {object}
     */
     get objects() {
        return this._objects;
    }

    /**
     * Returns animation settings
     * @returns {object}
     */
     get animations() {
        return this._animations;
    }

    /**
     * Returns demoMode settings
     * @returns {object}
     */
     get demoMode() {
        return this._demoMode;
    }
}

export default Configuration;