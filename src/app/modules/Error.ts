import config from "src/app/config";
import { toast } from 'react-toastify';

interface errorCodeInterface {
    message: string;
}

class Error {
    errorCode: string;
    errorData: errorCodeInterface;

    constructor(errorCode?: string) {
        this.errorCode = errorCode || "";

        // todo
        // @ts-ignore
        this.errorData = this.errorCode.length > 0 ? config.errorCodes[this.errorCode] : { message: "" }
    }

    public getMessage(): string {
        return this.errorData.message;
    }

    public notify(): void {
        toast.error(this.getMessage(), { autoClose: 4000 });
    }
}

export default Error;