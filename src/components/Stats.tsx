
export default function Stats(props: any): JSX.Element {

    return (
        <div className="stats">
            Turn: {props.turn ? 'X' : '0'}
        </div>
    )
}
