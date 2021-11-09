import { css } from "@emotion/css";

export default function Header() {
    const styles = css`
        text-align  : center;
        margin-top  : 100px;

        h1 {
            text-shadow : 0px 0px 23px #B45D5D;
        }

        p {
            font-size : 20px;
        }
    `;

    return (
        <header className={styles}>
            <div className="container">
                <h1>ThoughtApp</h1>
                <p>See what others are thinking</p>
            </div>
        </header>
    )
}