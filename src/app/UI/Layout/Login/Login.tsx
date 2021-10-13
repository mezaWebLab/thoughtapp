import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default function LoginLayout(props: Props) {
    return (
        <div className="login-layout">
            {props.children}
        </div>
    )
}