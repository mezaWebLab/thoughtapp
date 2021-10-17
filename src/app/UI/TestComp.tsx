import { useEffect, useState } from "react"
import axios from "axios";

export default function TestComp() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon")
            .then(res => setItems(res.data.results))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className="items">
                {items.map((item: any, i: number) => {
                    return (
                        <div key={i}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}