import { useRouter } from "next/router";

export default function ThoughtTopMenu() {
    const router = useRouter();
    
    return (
        <div className="top-menu">
            <button onClick={() => router.push("/")}>
                <img src="/thought-reader/left-arrow.svg" />
            </button>
        </div>
    );
}