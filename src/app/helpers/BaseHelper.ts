class BaseHelper {
    /**
     * Checks if variable is of type
     * @param variable - The variable to check type of
     * @param type - The type to test the variable to
     * @return boolean
     */
    public static is(variable: any, type: string): boolean {
        return typeof variable === type;
    }
}

export default BaseHelper;