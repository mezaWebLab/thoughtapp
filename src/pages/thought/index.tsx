import ThoughtReader from "../../app/UI/Home/ThoughtReader/ThoughtReader";
import DefaultLayout from "../../app/UI/Layout/Default";
import NetworkManager from "../../app/Game/Managers/NetworkManager";
import { useRouter } from "next/router";

interface Props {
    thoughtData: any;
}

export async function getServerSideProps(ctx: any) {
    if (ctx.query.id === undefined) return { redirect: { destination: "/" } };

    const networkManager = new NetworkManager(),
        thoughtData = await networkManager.fetchThoughtById(+ctx.query.id);

    return {
        props: { thoughtData }
    }
}

export default function Thought(props: Props) {
    const router = useRouter();

    return (
        <DefaultLayout>
            <div className="thought-page">
                <ThoughtReader 
                    onExit={() => router.push("/")}
                    thoughtData={props.thoughtData} />
            </div>
        </DefaultLayout>
    );
}