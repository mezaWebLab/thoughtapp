import BaseHelper from "src/app/helpers/BaseHelper";
import { css } from "@emotion/css";

interface Props {
    type?: string; // Type of field: text, password, email, etc
    theme?: string; // The styling setup: default, dark
    value: string; // The input's variable value to use
    onChange: Function; // The on change handler
    placeholder?: string; // The field's placeholder text
    styles?: string; // inherited styles
    required?: boolean; // whether this field is required or not
}

const is = BaseHelper.is;

export default function Field(props: Props) {
    const type = is(props.type, "string") ? props.type : "text",
        required = is(props.required, "boolean") ? props.required : false,
        styles = {
            main: css`
                padding       : 17px 15px;
                border-radius : 6px;
                width         : 100%;
                border        : none;
                ${ props.styles }
            `
        },
        themes = {
            default: css``,
            dark: css`
                background : #6D6D6D;
                color      : white;

                &::placeholder {
                    color : #D8D8D8;
                }
            `
        },
        currentTheme = props.theme ? themes[props.theme] : themes.default;
    
    return (
        <input 
            required={required}
            value={props.value}
            onChange={e => props.onChange(e)}
            className={`${styles.main} ${ currentTheme }`}
            type={type}
            placeholder={is(props.placeholder, "string") ? props.placeholder : ''} />
    );
}