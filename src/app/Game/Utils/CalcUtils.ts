import { Vector3 } from "babylonjs";

/**
 * Calc Utils class
 * Holds various utility functions needed for calculations
 */
class CalcUtils {
    /**
     * Returns a random Vector3
     * @returns 
     */
    static randomVector3(): any {
        return new Vector3(Math.random(), Math.random(), Math.random());
    }
}

export default CalcUtils;