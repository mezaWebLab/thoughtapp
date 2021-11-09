import Header from "src/app/UI/Home/Header";
import DefaultLayout from "src/app/UI/Layout/Default";
import MainPanel from "src/app/UI/Global/Panels/MainPanel";
import { css } from "@emotion/css";
import Button from "src/app/UI/Global/Button/Button";
import Field from "src/app/UI/Global/Field/Field";
import { useState } from "react";
import Link from "next/link";
import NetworkManager from "src/app/Game/Managers/NetworkManager";
import ApiUtils from "src/app/Game/Utils/ApiUtils";
import axios from "axios";
import Error from "src/app/modules/Error";

export default function SignUpPage() {
    const  
        [formData, setFormData] = useState({ username: "", email: "", password: "" }), 
        [submitted, setSubmitted] = useState(false),
        handlers = {
            async onSubmit(e: Event) {
                e.preventDefault();

                try {
                    const res = await axios.post(ApiUtils.url("/user/create"), { 
                        username: formData.username,
                        email: formData.email,
                        password: formData.password
                    });

                    console.log(res);
                } catch (e: any) {
                    const errorCodes = e.response.data;
                    
                    if (errorCodes instanceof Array) {
                        errorCodes.forEach((errorCode: any) => {
                            const error = new Error(errorCode);
                            error.notify();
                        });
                    }

                    setSubmitted(false);
                }   
            }
        },
        styles = {
            main: css`
                padding-bottom : 100px;
            `,
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
            `
    };

    return (
        <DefaultLayout>
            <div
                className={styles.main} 
                id="sign-up-page">
                <Header />
                <MainPanel>
                    <header>
                        <h2>Sign Up</h2>
                        <p>Start sharing your thoughts</p>
                    </header>
                    <hr />
                    <form
                        className={styles.form} 
                        onSubmit={(e: any) => handlers.onSubmit(e)}>
                        <Field
                            required={true}
                            styles={styles.fields}
                            value={formData.username}
                            onChange={(e: any) => setFormData({ username: e.target.value, email: formData.email, password: formData.password })}
                            type="text"
                            theme="dark"
                            placeholder="Username" />
                        <Field
                            required={true}
                            styles={styles.fields}
                            value={formData.email}
                            onChange={(e: any) => setFormData({ username: formData.username, email: e.target.value, password: formData.password })}
                            type="text"
                            theme="dark"
                            placeholder="Email" />
                        <Field 
                            required={true}
                            styles={styles.fields}
                            value={formData.password}
                            onChange={(e: any) => setFormData({ username: formData.username, email: formData.email, password: e.target.value })}
                            type="password"
                            theme="dark"
                            placeholder="Password" />
                        <Button 
                            disabled={submitted}
                            type="submit"
                            config="success">
                            {submitted ? <i className="las la-spinner"></i> : "Sign Up"}
                        </Button>
                        <Link href="/">Already have an account?</Link>
                    </form>
                </MainPanel>
            </div>
        </DefaultLayout>
    )
}