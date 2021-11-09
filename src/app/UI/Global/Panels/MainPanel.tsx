import { ReactNode } from "react";
import { css } from "@emotion/css";

interface props {
    children?: ReactNode
}

export default function MainPanel(props: props) {
    const styles = css`
        background      : rgba(54, 54, 54, 0.7);
        padding         : 25px 22px;
        border-radius   : 8px;
        box-shadow      : 0px 4px 10px 3px rgba(0, 0, 0, 0.25);
        backdrop-filter : blur(16px);
        margin          : 45px auto 0 auto;
        color           : white;
        max-width       : 400px;

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
    `;

    return (<div className={styles}>{props.children}</div>)
}