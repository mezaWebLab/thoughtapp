import { Mesh } from "babylonjs";

interface ThoughtData {
    id: number;
    body: string;
    hex: string;
    created_at: Date;
    updated_at: Date;
    rendered: boolean;
}

export default ThoughtData;