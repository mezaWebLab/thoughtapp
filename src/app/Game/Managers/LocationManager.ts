import Configuration from "../Configuration";
import axios from "axios";
import Geolocation from "../Interfaces/Geolocation";

class LocationManager {
    config: Configuration;

    constructor(config: Configuration) {
        this.config = config;
    }

    /**
     * 
     * @returns location object
     */
     async getGeneralLocation(): Promise<Geolocation> {
        const req = await axios.get("https://geolocation-db.com/json/");

        return {
            latitude: req.data.latitude,
            longitude: req.data.longitude
        }
    }

    getPreciseLocation(successCallback: Function, errorCallback: Function): Geolocation | void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => successCallback(pos), () => errorCallback());
        } else {
            errorCallback();
        }
    }
}

export default LocationManager;