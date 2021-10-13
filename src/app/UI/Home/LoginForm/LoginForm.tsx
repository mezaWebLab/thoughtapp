import { useRef } from "react"

interface Props {
    onChange: Function;
    usernameOrEmail: string;
    password: string; 
    onSubmit: Function;
}

export default function LoginForm(props: Props) {
    return (
        <div className="login-form">
            <form onSubmit={e => props.onSubmit(e)}>
                <input 
                    value={props.usernameOrEmail}
                    onChange={e => props.onChange({ usernameOrEmail: e.target.value, password: props.password })}
                    type="text" />
                <input 
                    value={props.password}
                    onChange={e => props.onChange({ usernameOrEmail:props.usernameOrEmail, password: e.target.value })}
                    type="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}