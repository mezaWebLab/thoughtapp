import { css } from "@emotion/css";

interface props {
    setup?: string;
    icon: string;
    styles?: string;
}

export default function MenuButton(props: props) {
    const styles = {
        highlight: css`
            background      : #B45D5D;
            width           : 70px;
            border          : none;
            height          : 70px;
            border-radius   : 100px;
            box-shadow      : 0px 4px 4px rgba(0, 0, 0, 0.25);
            color           : white;
            transition      : transform 0.25s ease-in-out;
            display         : flex;
            align-items     : center;
            justify-content : center;
            
            &:hover {
                transform : scale(1.05);
            }

            &:active {
                transform : scale(0.95);
            }

            ${ props.styles }

            img {
                filter : invert(1);
                width  : 40px;
            }
        `,
        main: css`
            background      : white;
            border          : none;
            width           : 45px;
            height          : 45px;
            border-radius   : 100px;
            box-shadow      : 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition      : transform 0.25s ease-in-out;
            display         : flex;
            align-items     : center;
            justify-content : center;
            ${ props.styles }
            
            &:hover {
                transform : scale(1.05);
            }

            &:active {
                transform : scale(0.95);
            }

            img {
                width : 24px;
            }
        `
    }

    // @ts-ignore
    const setup = styles[props.setup] ? styles[props.setup] : styles.main;

    return (
        <button className={setup}>
            <img src={`assets/icons/${ props.icon }.svg`} />
        </button>
    );
}