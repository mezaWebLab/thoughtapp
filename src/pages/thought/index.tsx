import ThoughtReader from "../../app/UI/Thought/ThoughtReader/ThoughtReader";
import DefaultLayout from "../../app/UI/Layout/Default";
import NetworkManager from "../../app/Game/Managers/NetworkManager";
import ThoughtTopMenu from "../../app/UI/Thought/ThoughtTopMenu/ThoughtTopMenu";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
    thoughtData: any;
}

export async function getServerSideProps(ctx: any) {
    if (ctx.query.id === undefined) return { redirect: { destination: "/" } };

    const networkManager = new NetworkManager(),
        thoughtData = await networkManager.fetchThoughtById(+ctx.query.id);

    return { props: { thoughtData } }
}

export default function Thought(props: Props) {
    const router = useRouter();

    useEffect(() => {
        if (typeof router.query.hex === "string") router.replace("/thought?id=" + props.thoughtData.id, undefined, { shallow: true });
    }, []);

    return (
        <DefaultLayout>
            <div 
                id="thought-page"
                style={{ background: router.query.hex || props.thoughtData.hex }}>
                <div className="thought-reader-wrapper">
                    <ThoughtTopMenu />
                    <ThoughtReader thoughtData={props.thoughtData} />
                </div>
            </div>
        </DefaultLayout>
    );
}