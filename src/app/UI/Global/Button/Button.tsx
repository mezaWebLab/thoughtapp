import { ReactNode } from "react";
import BaseHelper from "src/app/helpers/BaseHelper";
import { css } from '@emotion/css';

const is = BaseHelper.is;

interface Props {
    children?: ReactNode;
    type?: any;
    config?: string;
    styles?: string;
    disabled?: boolean;
    onClick?: Function;
}

export default function Button(props: Props) {
    const config = is(props.config, "string") ? props.config  : "default",
        styleHelpers = {
            getBackground(): string {
                switch (config) {
                    case "success":
                        return "#72AD63";
                    default:
                        return "#B45D5D";
                }
            }
        },
        style = css`
            color         : white;
            border-radius : 6px;
            font-weight   : bold;
            display       : block;
            padding       : 17px 16px;
            width         : 100%;
            border        : none;
            background    : ${ styleHelpers.getBackground() };
            ${ props.styles }
        `;

    return (
        <button 
            onClick={e => props.onClick ? props.onClick(e) : null}
            type={props.type || 'button'}
            className={`${style}${ props.disabled ? ' disabled' : '' }`}>
            {props.children}
        </button>
    )
}