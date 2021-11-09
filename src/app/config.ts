const config = {
    pages: {
        login: {},
        signUp: {}
    },
    errorCodes: {
        PASSWORD_NOT_VALID: {
            message: "Password is incorrect"
        },
        USERNAME_OR_EMAIL_NOT_FOUND: {
            message: "Username or email not found"
        },
        CREDENTIALS_NOT_PROVIDED: {
            message: "Please fill all the fields"
        },
        PASSWORD_NOT_ALLOWED: {
            message: "Password must have at least 9 characters"
        },
        EMAIL_NOT_ALLOWED: {
            message: "Email is not valid"
        },
        USERNAME_ALREADY_EXISTS: {
            message: "Username is taken"
        },
        EMAIL_ALREADY_EXISTS: {
            message: "Email is already in use"
        },
        MISSING_SIGN_UP_PARAMETERS: {
            message: "Please fill out all fields"
        }
    }
}

export default config;