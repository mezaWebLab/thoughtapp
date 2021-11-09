import Button from "src/app/UI/Global/Button/Button";
import Field from "src/app/UI/Global/Field/Field";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import MainPanel from "src/app/UI/Global/Panels/MainPanel";
import router from "next/router";
interface error {
    enabled: boolean;
    message: string;
}

interface Props {
    error: error;
    onChange: Function;
    usernameOrEmail: string;
    password: string; 
    onSubmit: Function;
    submitted: boolean;
}

export default function LoginForm(props: Props) {
    const router = useRouter(), 
        styles = {
            form: css`
                text-align : center;

                a {
                    color           : white;
                    text-decoration : none;
                    display         : block;
                    margin-top      : 20px;
                }

                button {
                    height : 55px;

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    i {
                        font-size : 23px;
                        display   : block;
                        animation : spin 1s linear infinite;
                    }
                }
            `,
            fields: css`
                margin-bottom : 15px;
            `,
            createNewAccountButton: css`
                max-width: 205px;
                margin: 0 auto;
            `
        };

    return (
        <MainPanel>
            <form
                className={styles.form} 
                onSubmit={(e: any) => props.onSubmit(e)}>
                <Field
                    required={true}
                    styles={styles.fields}
                    value={props.usernameOrEmail}
                    onChange={(e: any) => props.onChange({ usernameOrEmail: e.target.value, password: props.password })}
                    type="text"
                    theme="dark"
                    placeholder="Username or email" />
                <Field 
                    required={true}
                    styles={styles.fields}
                    value={props.password}
                    onChange={(e: any) => props.onChange({ usernameOrEmail:props.usernameOrEmail, password: e.target.value })}
                    type="password"
                    theme="dark"
                    placeholder="Password" />
                <Button 
                    disabled={props.submitted}
                    type="submit">
                    {props.submitted ? <i className="las la-spinner"></i> : "Log In"}
                </Button>
                <a href="#">Forgot Password?</a>
            </form>
            <hr />
            <Button 
                onClick={() => router.push("/sign-up")}
                styles={styles.createNewAccountButton}
                config="success">
                Create New Account
            </Button>
        </MainPanel>
    )
}