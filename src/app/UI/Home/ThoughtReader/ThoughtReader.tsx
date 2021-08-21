interface Props {
    thoughtData: any;
}

export default function ThoughtReader(props: Props) {
    return (
        <div 
            style={{ backgroundColor: props.thoughtData.hex }}
            className="thought-reader">
        </div>
    );
}