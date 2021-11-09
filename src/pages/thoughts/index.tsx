import { useEffect } from "react";

export default function ThoughtsPage(props: any) {
    useEffect(() => {
        console.log(props.game);
    }, [props.game]);
    
    return (
        <div>
            
        </div>
    )
}