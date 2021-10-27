import Configuration from "../Configuration";
import StorageUtils from "../Utils/StorageUtils";

class AuthManager {
    config: Configuration;

    constructor(config: Configuration) {
        this.config = config;
    }

    storeToken(token: string): void {
        StorageUtils.setCookie("token", token);
    }

    getToken(): string | null {
        return StorageUtils.getCookie("token");
    }
}

export default AuthManager;