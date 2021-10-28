import Button from "src/app/UI/Global/Button/Button";
import Field from "src/app/UI/Global/Field/Field";
import { css } from "@emotion/css";

interface Props {
    onChange: Function;
    usernameOrEmail: string;
    password: string; 
    onSubmit: Function;
}

export default function LoginForm(props: Props) {
    const styles = {
        main: css`
            background      : rgba(54, 54, 54, 0.7);
            padding         : 21px 22px;
            border-radius   : 8px;
            box-shadow      : 0px 4px 10px 3px rgba(0, 0, 0, 0.25);
            backdrop-filter : blur(16px);
            margin-top      : 45px;
            color           : white;

            form {
                text-align : center;

                a {
                    color           : white;
                    text-decoration : none;
                    display         : block;
                    margin-top      : 20px;
                }
            }

            hr {
                margin-top    : 33px;
                margin-bottom : 33px;
                display       : block;
                border        : 0;
                height        : 1px;
                width         : 100%;
                padding       : 0px;
                border-top    : 1px solid #707070;
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
        <div className={styles.main}>
            <form onSubmit={(e: any) => props.onSubmit(e)}>
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
                <Button type="submit">
                    Log In
                </Button>
                <a href="#">Forgot Password?</a>
            </form>
            <hr />
            <Button 
                styles={styles.createNewAccountButton}
                config="success">
                Create New Account
            </Button>
        </div>
    )
}