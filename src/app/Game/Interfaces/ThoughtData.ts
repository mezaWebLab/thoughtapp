import { Mesh } from "babylonjs";

interface ThoughtData {
    id: number;
    body: string;
    created_at: Date;
    updated_at: Date;
    rendered: boolean;
    mesh?: Mesh;
}

export default ThoughtData;